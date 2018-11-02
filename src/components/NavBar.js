import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

// Regular CSS
const styles = {
	navBar: {
		position: "static"
	}
}

// Material ui theme
const bla = createMuiTheme({
	palette: {
		primary: {
			main: '#FF3D00'
			//light: "",
			//dark: "",
			//contrastText: ""
		},
		secondary: {
			main: '#212121'
		}
		//error: { main: '' }
	}
})

class NavBar extends Component {
	render() {
		return (
			<div>
				<MuiThemeProvider theme={bla}>
					<AppBar position="static" classname="navBar">
						<Toolbar>
							<Typography variant="h6" color='secondary'>
								OSU USLI
							</Typography>
						</Toolbar>
					</AppBar>
				</MuiThemeProvider>
			</div>
		);			
	}
}

export default withStyles(styles)(NavBar);
