import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Background from '../files/Corvallis.jpg';
import styled from 'styled-components'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import Patch from '../files/Patch.PNG';
import Corvallis from '../files/oregon.jpg';
import MissionProfile from '../files/mission-profile.png';

const styles = {
	width: 'calc(100% - 220px)',
	height: 'calc(100% + 50px)',
	flex: '1',
	overflowY: 'auto',
	overflowX: 'auto',

	root: {
		overflow: 'auto',
	},
};


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: White;
	fontFamily:
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1em;
  background: rgba(0,0,0,0.8);
`;

const Wrapper1 = styled.section`
	padding: 1em;
	background: rgba(0,0,0,0);
	overflowY: scroll;
`;

const MissionTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: Black;
	fontFamily:
`;

const MissionStatement = styled.p`
  font-size: 1em;
  text-align: left;
  color: Black;
	fontFamily:
`;

const MissionStatementTwo = styled.p`
  font-size: 1em;
  text-align: left;
  color: Black;
	fontFamily:
`;

const Mission = styled.section`
  padding: 0.5em;
  background:rgba(255,255,255, 1);
`;


class Home extends Component {
	render() {
		return (
			<section style={ styles }>
			<div style={{overflowY: 'auto' , fontSize: '16px'}}>
			<Wrapper>
		    <Title>
		      University Student Launch Initiative
					<p>Oregon State University</p>
		    </Title>
			</Wrapper>

			<Wrapper1>
				<MissionTitle>
					What is USLI?
				</MissionTitle>
				<MissionStatement>
				The University Student Launch Initiative is a research-based, competitive, experiential
        exploration activity. It strives to provide relevant, cost-effective research and development of
        rocket propulsion systems. This project offers multiple challenges reaching a broad audience of
        middle and high schools, colleges, and universities across the nation (NASA.gov). This is OSU's
        second year participating in this challenge, and the team is comprised of Mechanical, Electrical,
        and Software Engineering students all working toward a successful rocket launch and payload
        deployment. 
				</MissionStatement>
				<img src={MissionProfile} width="100%" height = "auto"/>
				Each team must design, build, and launch a single-stage solid-propellant rocket to an
        altitude of one mile. Once the rocket has landed, a robotic payload must be deployed, move a
        specified distance away from the rocket body, and collect a soil sample. Teams are also responsible
        for a significant body of safety and engineering documentation throughout the process. The team that
        performs the best over all categories is designated by NASA as the competition's victor. Last year
        (2018), the OSU USLI team scored 6th out of 45 teams, and secured awards for Rookie of the Year and
        3rd place overall in payload design.
				</Wrapper1>
				</div>
				</section>

		);
	}
}


export default withStyles(styles)(Home);
