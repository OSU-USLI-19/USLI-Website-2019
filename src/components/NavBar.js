import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 220;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	toolbar: theme.mixins.toolbar,
});

function NavBar(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						OSU USLI
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.toolbar} />
				<List>
					{['HOME', 'About Us', 'NASA', 'Documents'].map((text, index) => (
						<ListItem button key={text}>
							{/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />  }</ListItemIcon> */}

							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['Educational Outreach', 'Donate', 'Sponsors'].map((text, index) => (
						<ListItem button key={text}>
							{/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon />: <MailIcon />}</ListItemIcon> */}
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			{/*<main className={classes.content}>
				<div className={classes.toolbar} />
				<Typography paragraph>
					
				</Typography>
				<Typography paragraph>
					
				</Typography>
			</main> */}
		</div>
	);
}

export default withStyles(styles)(NavBar);