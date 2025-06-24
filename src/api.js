const { InstanceStatus } = require('@companion-module/base')

const mqtt = require('mqtt')

module.exports = {
	initMqtt: function () {
		let self = this

		if (self.config.host) {
			const brokerUrl = `ws://${self.config.host}/mqtt`

			self.log('debug', `Connecting to MQTT broker at ${brokerUrl}`)

			self.mqttClient = mqtt.connect(brokerUrl, {
				username: self.config.username,
				password: self.config.password,
			})

			self.mqttClient.on('connect', () => {
				self.updateStatus(InstanceStatus.Ok)
				self.log('info', `Connected to MQTT broker at ${brokerUrl}`)

				self.initialSubscribe()
			})

			self.mqttClient.on('error', (err) => {
				self.updateStatus(InstanceStatus.ConnectionFailure)
				let showSpecific = false
				Object.keys(err).forEach(function (key) {
					if (key === 'code') {
						if (err[key] === 'ECONNREFUSED') {
							self.log('error', 'Connection refused. Is this the right IP address?')
							showSpecific = true
						}
					}
				})

				if (!showSpecific) {
					self.log('error', err.toString())
				}

				self.mqttClient.end()
			})

			self.mqttClient.on('offline', () => {
				self.log('warn', 'MQTT Client Offline')
				self.updateStatus(InstanceStatus.UnknownWarning, 'MQTT Client Offline')
			})

			self.mqttClient.on('message', (topic, message) => {
				try {
					if (self.config.verbose) {
						self.log(
							'debug',
							`Received MQTT message on topic: ${topic} - Message: ${message ? message.toString() : ''}`,
						)
					}

					if (topic) {
						self.handleMqttMessage(topic, message ? message.toString() : '')
					}
				} catch (e) {
					self.log('error', `Handle message failed: ${e.toString()}`)
				}
			})
		}
	},

	initialSubscribe: function () {
		let self = this

		if (self.config.verbose) {
			self.log('debug', 'Subscribing to initial topics')
		}

		self.subscribeToTopic('System/Product', '{}')
		self.subscribeToTopic(self.recPrefix + '/Info', '{}')
		self.subscribeToTopic(self.streamPrefix + '/Info', '{}')
	},

	handleMqttMessage: function (topic, message) {
		let self = this

		try {
			message = JSON.parse(message)

			if (self.config.verbose) {
				self.log('debug', `Parsed message: ${JSON.stringify(message)}`)
			}

			switch (topic) {
				case 'System/Product':
					self.data.deviceName = message['name']
					break
				case self.recPrefix + '/Info':
					self.data.recordingState = message['State']
					self.data.recordingPercentUsed = message['Percent Used']
					self.data.recordingSize = message['Size']
					self.data.recordingUsed = message['Used']
					self.data.recordingAvailable = message['Available']
					self.data.recordingUptime = message['Uptime']
					if (message['State Details']) {
						self.log('info', message['State Details'])
					}
					break
				case self.streamPrefix + '/Info':
					self.data.streamingState = message['State']
					self.data.streamingUptime = message['Uptime']
					if (message['State Details']) {
						self.log('info', message['State Details'])
					}
					break
				default:
					break
			}

			self.checkFeedbacks()
			self.checkVariables()
		} catch (error) {
			self.log('error', `Unable to parse incoming message from device.`)
		}
	},

	subscribeToTopic: function (topic, data) {
		let self = this

		if (self.config.verbose) {
			self.log('debug', `Subscribing to topic: ${topic} with data: ${JSON.stringify(data)}`)
		}

		self.mqttClient.subscribe(topic, (err) => {
			if (!err) {
				self.log('debug', `Successfully subscribed to topic: ${topic}`)
				return
			}

			self.log('debug', `Failed to subscribe to topic: ${topic}. Error: ${err}`)
		})
	},

	publishMessage: function (topic, payload, qos, retain) {
		let self = this

		if (self.config.verbose) {
			self.log('debug', `Publishing message to topic: ${topic} - Payload: ${payload} - QoS: ${qos} - Retain: ${retain}`)
		}

		self.mqttClient.publish(topic, payload, { qos: qos, retain: retain }, function (err) {
			//console.log(err);
		})
	},

	sendCommand: function (topic, payload) {
		let self = this

		if (self.config.verbose) {
			self.log('debug', `Sending command to topic: ${topic} - Payload: ${JSON.stringify(payload)}`)
		}

		topic = topic + '/' + new Date().valueOf().toString()

		self.subscribeToTopic(topic + '/+', {})
		self.publishMessage(topic, JSON.stringify(payload), 2, true)
	},
}
