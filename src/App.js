import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NavBar from "./components/NavBar";
import BaseTheme from "./components/themes/BaseTheme"
import Body from "./components/Body";

const App = () => (
	<Router>
		<MuiThemeProvider theme={BaseTheme} >
			<header>
				<NavBar />
			</header>
			<Body />
		</MuiThemeProvider>
	</Router>
)

export default App;
