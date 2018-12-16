import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
				
			</Paper>
		</div>
	);
}

export default withStyles(styles)(Body);