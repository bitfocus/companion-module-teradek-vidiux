module.exports = {
	initVariables: function () {
		let self = this
		let variables = []

		variables.push({ variableId: 'device_name', name: 'Device Name' })

		variables.push({ variableId: 'recording_state', name: 'Recording State' })
		variables.push({ variableId: 'recording_percent', name: 'Recording % Used' })
		variables.push({ variableId: 'recording_size', name: 'Recording Drive Size' })
		variables.push({ variableId: 'recording_used', name: 'Recording Drive Used' })
		variables.push({ variableId: 'recording_available', name: 'Recording Drive Available' })
		variables.push({ variableId: 'recording_uptime', name: 'Recording Uptime' })

		variables.push({ variableId: 'streaming_state', name: 'Streaming State' })
		variables.push({ variableId: 'streaming_uptime', name: 'Streaming Uptime' })

		self.setVariableDefinitions(variables)
	},

	checkVariables: function () {
		let self = this

		try {
			let variableObj = {}

			variableObj['device_name'] = self.data.deviceName

			variableObj['recording_state'] = self.data.recordingState
			variableObj['recording_percent'] = self.data.recordingPercentUsed
			variableObj['recording_size'] = self.data.recordingSize
			variableObj['recording_used'] = self.data.recordingUsed
			variableObj['recording_available'] = self.data.recordingAvailable
			variableObj['recording_uptime'] = self.data.recordingUptime

			variableObj['streaming_state'] = self.data.streamingState
			variableObj['streaming_uptime'] = self.data.streaming_uptime

			self.setVariableValues(variableObj)
		} catch (error) {
			self.log('error', 'Error parsing Variables: ' + String(error))
		}
	},
}
