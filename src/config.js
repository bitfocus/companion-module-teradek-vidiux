const { Regex } = require('@companion-module/base')

module.exports = {
	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info1',
				width: 12,
				label: 'Information',
				value: `This module controls the Teredek VidiU X.`,
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'IP Address',
				width: 4,
				regex: Regex.IP,
			},
			{
				type: 'textinput',
				id: 'username',
				label: 'Username',
				default: 'admin',
				width: 4,
			},
			{
				type: 'textinput',
				id: 'password',
				label: 'Password',
				default: 'admin',
				width: 4,
			},
			{
				type: 'static-text',
				id: 'hr1',
				width: 12,
				label: '',
				value: '<hr />',
			},
			{
				type: 'checkbox',
				id: 'verbose',
				label: 'Enable Verbose Logging',
				default: false,
				width: 3,
			},
			{
				type: 'static-text',
				id: 'info3',
				width: 9,
				label: ' ',
				value: `Enabling Verbose Logging will push all incoming and outgoing data to the log, which is helpful for debugging.`,
			},
		]
	},
}
