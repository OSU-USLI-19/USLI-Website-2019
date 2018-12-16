import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
};

class Deliverables extends Component {
	render() {
		return (
			<div>
				<Paper>
					<Card>
						<CardContent>
							Deliverables
						</CardContent>
					</Card>
				</Paper>

			</div>
		);
	}
}

export default withStyles(styles)(Deliverables);
