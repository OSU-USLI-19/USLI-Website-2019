import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs"
import BaseTheme from "./components/themes/BaseTheme"

const App = () => (
	<Router>
		<MuiThemeProvider theme={BaseTheme} >
			<header>
				<NavBar />
			</header>
			<main>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/aboutus" component={AboutUs} />
				</Switch>
			</main>
		</MuiThemeProvider>
	</Router>
)

export default App;
