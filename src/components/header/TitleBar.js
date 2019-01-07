import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { relative } from 'path';

const styles = theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer+1
	},
});

function TitleBar(props) {
	const { classes } = props;

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					OSU USLI
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default withStyles(styles)(TitleBar);
