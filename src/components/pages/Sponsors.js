import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = {
};

class Sponsors extends Component {
	render() {
		return (
			<div>
				<Card>
					<CardContent>
						Sponsors
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(Sponsors);
