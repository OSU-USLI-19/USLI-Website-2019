import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Homepage from "./components/webpages/Homepage";

// Material ui theme
const bla = createMuiTheme({
	palette: {
		primary: {
			main: '#d73f09'
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

class App extends Component {
	render() {
    return (
		<div>
			<MuiThemeProvider theme={bla}>
				<NavBar />
				<Homepage />
			</MuiThemeProvider>
		</div>
    );
  }
}

export default App;
