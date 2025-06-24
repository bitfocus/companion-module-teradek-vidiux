const { combineRgb } = require('@companion-module/base')
const { type } = require('os')

module.exports = {
	initPresets: function () {
		let self = this
		let presets = []

		const foregroundColor = combineRgb(255, 255, 255) // White
		const foregroundColorBlack = combineRgb(0, 0, 0) // Black
		const backgroundColorRed = combineRgb(255, 0, 0) // Red
		const backgroundColorGreen = combineRgb(0, 255, 0) // Green
		const backgroundColorYellow = combineRgb(255, 191, 0) // Yellow
		const backgroundColorOrange = combineRgb(255, 102, 0) // Orange
		const backgroundColorBlue = combineRgb(0, 0, 255) // Blue
		const backgroundColorGray = combineRgb(128, 128, 128) // Gray

		presets.push({
			category: 'Recording',
			name: 'Recording Start',
			type: 'button',
			style: {
				text: 'REC\\nSTART',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'recordingControl',
							options: {
								command: 'start',
							},
						},
					],
					up: []
				}
			],
			feedbacks: [
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Offline',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Not Ready',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorGray,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Preparing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorOrange,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Recording',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		})

		presets.push({
			category: 'Recording',
			name: 'Recording Stop',
			type: 'button',
			style: {
				text: 'REC\\nSTOP',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'recordingControl',
							options: {
								command: 'stop',
							},
						},
					],
					up: []
				}
			],
			feedbacks: [
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Offline',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Not Ready',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorGray,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Preparing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorOrange,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Recording',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		})

		presets.push({
			category: 'Recording',
			name: 'Recording State',
			type: 'button',
			style: {
				text: '$(teradek-vidiux:recording_state)',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			feedbacks: [
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Offline',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Not Ready',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorGray,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Preparing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorOrange,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Recording',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		})

		presets.push({
			category: 'Recording',
			name: 'Recording Uptime',
			type: 'button',
			style: {
				text: '$(teradek-vidiux:recording_uptime)',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
		})

		presets.push({
			category: 'Streaming',
			name: 'Streaming Start/Publish',
			type: 'button',
			style: {
				text: 'STREAM\\nSTART',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'streamingControl',
							options: {
								command: 'publish',
							},
						},
					],
					up: []
				}
			],
			feedbacks: [
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Playing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Live',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		})

		presets.push({
			category: 'Streaming',
			name: 'Streaming Stop/Unpublish',
			type: 'button',
			style: {
				text: 'STREAM\\nSTOP',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'streamingControl',
							options: {
								command: 'unpublish',
							},
						},
					],
					up: []
				}
			],
			feedbacks: [
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Playing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Live',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		})

		presets.push({
			category: 'Streaming',
			name: 'Streaming State',
			type: 'button',
			style: {
				text: '$(teradek-vidiux:streaming_state)',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			feedbacks: [
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Playing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Live',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		})

		presets.push({
			category: 'Streaming',
			name: 'Streaming Uptime',
			type: 'button',
			style: {
				text: '$(teradek-vidiux:streaming_uptime)',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
		})

		self.setPresetDefinitions(presets)
	},
}
