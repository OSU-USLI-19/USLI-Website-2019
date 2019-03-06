import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	appBar: {
    zIndex: theme.zIndex.drawer+1,
    bottom: 0,
    right: 0,
    top: 'auto',
    width: 'calc(100% - 220px)',
    height: '50px',
  },
});

function Footer(props) {
	const { classes } = props;

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
        <Grid 
          container 
          direction="row"
          justify="flex-end"
          alignItems="flex-start">
          <Grid item>
            <Typography variant="h6" color="inherit" noWrap>
              COPYRIGHT © OSU USLI 2017, 2018, 2019
            </Typography>
          </Grid>
        </Grid>
			</Toolbar>
		</AppBar>
	);
}

export default withStyles(styles)(Footer);
