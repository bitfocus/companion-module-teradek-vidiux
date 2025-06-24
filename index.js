// AtlasIED Atmopshere

const { InstanceBase, InstanceStatus, runEntrypoint } = require('@companion-module/base')
const UpgradeScripts = require('./src/upgrades')

const config = require('./src/config')

const actions = require('./src/actions')
const feedbacks = require('./src/feedbacks')
const variables = require('./src/variables')
const presets = require('./src/presets')

const api = require('./src/api')

class vidiuXInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		// Assign the methods from the listed files to this class
		Object.assign(this, {
			...config,

			...actions,
			...feedbacks,
			...variables,
			...presets,
			
			...api,
		})

		this.mqttClient = null

		this.recPrefix = 'Session/0/Record'
		this.streamPrefix = 'Session/0/Stream/0'

		this.data = {
			deviceName: '',
			recordingState: 'Unknown',
			recordingPercentUsed: 'Unknown %',
			recordingSize: 'Unknown G',
			recordingUsed: 'Unknown G',
			recordingAvailable: 'Unknown G',
			recordingUptime: '00:00:00',
			streamingState: 'Unknown',
			streamingUptime: '00:00:00',
		}
	}

	async destroy() {
		this.mqttClient.end()
	}

	async init(config) {
		this.configUpdated(config)
	}

	async configUpdated(config) {
		this.updateStatus(InstanceStatus.Connecting)

		this.config = config

		this.initActions()
		this.initFeedbacks()
		this.initVariables()
		this.initPresets()

		this.initMqtt()

		this.checkVariables()
		this.checkFeedbacks()
	}
}

runEntrypoint(vidiuXInstance, UpgradeScripts)
