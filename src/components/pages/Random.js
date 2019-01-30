import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import pdr from '../files/Oregon_State_University-2019-PDR-Report.pdf';
import cdr from '../files/OSU_USLI_2019_CDR.pdf';
import { Document, Page } from 'react-pdf';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import Patch from '../files/Patch.PNG';

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
						<Grid>
						  <Row>
						    <Col xs={6} md={4}>
						      <img src="../files/Patch.PNG" circle />
						    </Col>
						  </Row>
						</Grid>;

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
