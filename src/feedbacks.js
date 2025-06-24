const { combineRgb } = require('@companion-module/base')

module.exports = {
	initFeedbacks: function () {
		let self = this
		let feedbacks = {}

		const foregroundColor = combineRgb(255, 255, 255) // White
		const backgroundColorRed = combineRgb(255, 0, 0) // Red

		feedbacks.recordingState = {
			type: 'boolean',
			name: 'Recording',
			description: 'Indicate Device Recording State',
			style: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: 'recording',
					choices: [
						{ id: 'Recording', label: 'Recording' },
						{ id: 'Ready', label: 'Ready' },
						{ id: 'Invalid', label: 'Invalid' },
						{ id: 'Not Ready', label: 'Not Ready' },
						{ id: 'Preparing', label: 'Preparing' },
						{ id: 'Offline', label: 'Offline' },
					],
				},
			],
			callback: function (feedback, bank) {
				var opt = feedback.options

				if (self.data.recordingState === opt.option) {
					return true
				}

				return false
			},
		}

		feedbacks.streamingState = {
			type: 'boolean',
			name: 'Streaming',
			description: 'Indicate Device Streaming State',
			style: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: 'broadcasting',
					choices: [
						{ id: 'Live', label: 'Live' },
						{ id: 'Ready', label: 'Ready' },
						{ id: 'Playing', label: 'Playing' },
						{ id: 'Invalid', label: 'Invalid' },
					],
				},
			],
			callback: function (feedback, bank) {
				var opt = feedback.options

				if (self.data.streamingState === opt.option) {
					return true
				}

				return false
			},
		}

		self.setFeedbackDefinitions(feedbacks)
	},
}
