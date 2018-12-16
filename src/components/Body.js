import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Route, Switch } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"
import Deliverables from "./pages/Deliverables"
import Archive from "./pages/Archive"
import Sponsors from "./pages/Sponsors"
import Outreach from "./pages/Outreach"

const styles = theme => ({
	MainBody: {
        position: "absolute",
        top: "8.5%",
        left: "14.3%",
        height: "91.5%",
        width: "85.7%"
    }
});

function Body(prop) {
    const { classes } = prop;
	return (
        
		<div className={classes.MainBody}>
			<Paper>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/about us" component={AboutUs} />
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