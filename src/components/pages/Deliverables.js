import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import pdr from '../files/Oregon_State_University-2019-PDR-Report.pdf';
import cdr from '../files/OSU_USLI_2019_CDR.pdf';
import { Document, Page } from 'react-pdf';

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
												<a href={pdr} download="Oregon State PDR">Oregon State PDR</a>
					</CardContent>
				</Card>
				<Card>
				<CardContent>
											<a href={cdr} download="Oregon State CDR">Oregon State CDR</a>
				</CardContent>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(Deliverables);
