import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Background from '../files/Corvallis.jpg';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import Patch from '../files/Patch.PNG';

const styles = {
	width: "100%",
	height: "1000px",
	backgroundImage: "url(" + Background + ")"
};


class Home extends Component {
	render() {
		return (
			<section style={ styles }>
			</section>
		);
	}
}

export default withStyles(styles)(Home);
