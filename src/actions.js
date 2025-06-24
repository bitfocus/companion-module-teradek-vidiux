module.exports = {
	// ##########################
	// #### Instance Actions ####
	// ##########################

	setActions: function (i) {
		let self = i
		let actions = {}

		actions.recordingControl = {
			label: 'Recording Control',
			options: [
				{
					type: 'dropdown',
					label: 'Command',
					id: 'command',
					default: 'start',
					choices: [
						{ id: 'start', label: 'Start' },
						{ id: 'stop', label: 'Stop' },
					],
				},
			],
			callback: function (action, bank) {
				self.sendCommand(self.recPrefix + '/' + action.options.command, {})
			},
		}

		actions.streamingControl = {
			label: 'Streaming Control',
			options: [
				{
					type: 'dropdown',
					label: 'Command',
					id: 'command',
					default: 'publish',
					choices: [
						{ id: 'publish', label: 'Publish' },
						{ id: 'unpublish', label: 'Unpublish' },
						{ id: 'Sharelink/publish', label: 'Sharelink Publish' },
						{ id: 'Sharelink/unpublish', label: 'Sharelink Unpublish' },
						{ id: 'broadcast', label: 'Broadcast' },
						{ id: 'halt', label: 'Halt' },
						{ id: 'cancel', label: 'Cancel' },
						{ id: 'preview', label: 'Preview' },
						{ id: 'endpreview', label: 'End Preview' },
						{ id: 'complete', label: 'Complete' },
					],
				},
			],
			callback: function (action, bank) {
				self.sendCommand(self.streamPrefix + '/' + action.options.command, {})
			},
		}

		return actions
	},
}
