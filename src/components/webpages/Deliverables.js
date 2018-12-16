import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = {
	media: {
		height: 250
	}
};



class Deliverables extends Component {
	render() {
		return (
			<div>
				<Card>
					<CardContent>
                        <a href='/somefile.txt' download>Click to download</a>	
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(Deliverables);
