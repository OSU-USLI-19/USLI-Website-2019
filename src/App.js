import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Body from "./components/Body";
import NavBar from "./components/NavBar";

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
				<Body />
			</MuiThemeProvider>
		</div>
    );
  }
}

export default App;
