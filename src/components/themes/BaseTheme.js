import { createMuiTheme } from '@material-ui/core/styles'

const BaseTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#d73f09'
		},
		secondary: {
			main: '#212121'
		},
	},
	overides: {
		body: {
			background: '#424242'
		},
	},
})

export default BaseTheme;
