import React from 'react';
import Rotary from './Rotary';
import { Blurb, BlurbText, BlurbIcon } from './Component.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { View } from '../UI/Spacing';

export const About = () => {
	return (
		<div data-test="about">
			<Rotary />
			<View>
				<Blurb>
					<BlurbText>> Hi, I'm a self taught web developer_</BlurbText>
					<BlurbIcon>
						<FontAwesomeIcon icon={faGithub} />
					</BlurbIcon>
				</Blurb>
				<Blurb alt>
					<BlurbIcon>
						<FontAwesomeIcon icon={faGithub} />
					</BlurbIcon>
					<BlurbIcon>
						<FontAwesomeIcon icon={faGithub} />
					</BlurbIcon>
					<BlurbText>> I work in the React and Node ecosystem_</BlurbText>
				</Blurb>
			</View>
		</div>
	);
};

export default About;
