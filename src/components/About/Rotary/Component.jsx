import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { rotary } from '../../../content';
import { WATERFALL_1 } from '../../UI/base';
import { FadeOnScroll } from '../../UI/utils';

import { RotaryWrapper, RotaryText, RotaryWord, RotaryWordBoundary } from './Component.style';

const { words, text } = rotary;

const RotaryWordSplitter = ({ children, showWord, hideWord, changeWord }) => {
	const letters = children.split('');
	const delayTime = 50;
	const alternateTime = 100;
	const letterTime = letters.length * delayTime + alternateTime;
	return (
		<>
			{letters.map((item, index) => (
				<CSSTransition
					in={showWord}
					classNames="rotary"
					timeout={letterTime}
					onEntered={() => setTimeout(hideWord, WATERFALL_1 + letterTime)}
					onExited={() => setTimeout(changeWord, letterTime)}
					key={`rotaryletter-${index}`}
				>
					<RotaryWord
						transitionTime={letterTime}
						alternate={index % 2 === 0}
						delay={index * delayTime}
						key={`rotary-word-${index}`}
						alternateTime={alternateTime}
					>
						{item}
					</RotaryWord>
				</CSSTransition>
			))}
		</>
	);
};

export const Rotary = () => {
	const [word, setWord] = useState(words[0]);
	const [showWord, setShowWord] = useState(false);

	useEffect(() => {
		setShowWord(true);
	}, []);

	function hideWord() {
		setShowWord(false);
	}

	function changeWord() {
		const currentIndex = words.findIndex(i => i === word);
		const nextIndex = currentIndex + 1 < words.length ? currentIndex + 1 : 0;

		setWord(words[nextIndex]);
		setShowWord(true);
	}

	return (
		<RotaryWrapper data-testid="rotary">
			<FadeOnScroll>
				<RotaryText>{text}</RotaryText>
				<RotaryWordBoundary>
					<RotaryWordSplitter showWord={showWord} hideWord={hideWord} changeWord={changeWord}>
						{word}
					</RotaryWordSplitter>
				</RotaryWordBoundary>
			</FadeOnScroll>
		</RotaryWrapper>
	);
};

export default Rotary;
