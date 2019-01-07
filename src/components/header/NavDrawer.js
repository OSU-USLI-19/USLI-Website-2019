import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import { relative } from 'path';

const drawerWidth = 220;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  content: {
    color: '#F5F5F5',
  },
  drawerPaper: {
    backgroundColor: '#212121',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar
});

const set1 = [
  'Home',
  'About Us',
  'Deliverables'
];

const set2 = [
  'Archive',
  'Outreach',
  'Sponsors'
];

function NavDrawer(props) {
  const { classes } = props;

  return (
    <Drawer 
      className={classes.drawer} 
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {set1.map((text, index) => (
          <ListItem button key={text} component={Link} to={"/" + text.replace(/\s/g, '')}>
            <Typography className={classes.content}>
              {text}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider light='true'/>
      <List>
        {set2.map((text, index) => (
          <ListItem button key={text} component={Link} to={"/" + text}>
            <Typography className={classes.content}>
              {text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(NavDrawer);
