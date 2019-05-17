import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"
import Deliverables from "./pages/Deliverables"
import Archive from "./pages/Archive"
import Sponsors from "./pages/Sponsors"
import Outreach from "./pages/Outreach"

const styles = theme => ({
	MainBody: {
		backgroundColor: "#424242",
		position: "absolute",
		left: 220,
		height: '100%',
		width: '100%',
	},
	toolbar: theme.mixins.toolbar
});

function Body(prop) {
	const { classes } = prop;

	return (
		<div className={classes.MainBody}>
		<div className={classes.toolbar} />
			<Paper>
				<Switch>
					<Route path="/Home" component={Home} />
					<Route path="/AboutUs" component={AboutUs} />
					<Route path="/Deliverables" component={Deliverables} />
					<Route path="/Archive" component={Archive} />
					<Route path="/Sponsors" component={Sponsors} />
					<Route path="/Outreach" component={Outreach} />
				</Switch>
			</Paper>
		</div>
	);
}

export default withStyles(styles)(Body);