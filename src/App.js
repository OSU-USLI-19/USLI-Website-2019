import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BaseTheme from "./components/themes/BaseTheme";
import NavDrawer from "./components/header/NavDrawer";
import TitleBar from "./components/header/TitleBar";
import Body from "./components/Body";
import Footer from "./components/header/Footer";

const App = () => (
	<Router>
		<MuiThemeProvider theme={BaseTheme} >
			<CssBaseline />
			<TitleBar />
			<NavDrawer />
			<Body />
			<Footer />
		</MuiThemeProvider>
	</Router>
)

export default App;
