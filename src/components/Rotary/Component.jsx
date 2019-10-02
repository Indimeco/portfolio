import React, { useState, useEffect } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { RotaryWrapper, RotaryText, RotaryWord } from './Component.style';
import { rotary } from '../../content';
import { WATERFALL_1, WATERFALL_2 } from '../UI/base/animations';
const { words, text } = rotary;

export const Rotary = () => {
	const [word, setWord] = useState(words[0]);
	const [showWord, setShowWord] = useState(true);

	useEffect(() => {
		const setNewWord = () => {
			const currentIndex = words.findIndex(i => i === word);
			const nextIndex = currentIndex + 1 < words.length ? currentIndex + 1 : 0;
			setShowWord(false);
			setWord(words[nextIndex]);
		};
		const revealWord = setTimeout(() => setShowWord(true), WATERFALL_2);
		const changeWord = setTimeout(setNewWord, WATERFALL_2 * 2);

		return () => {
			clearTimeout(revealWord);
			clearTimeout(changeWord);
		};
	}, [word]);

	return (
		<RotaryWrapper data-test="rotary">
			<RotaryText>{text}</RotaryText>
			<CSSTransitionGroup
				transitionName="fade"
				transitionEnterTimeout={WATERFALL_1}
				transitionLeaveTimeout={WATERFALL_1}
			>
				{showWord && <RotaryWord>{word}</RotaryWord>}
			</CSSTransitionGroup>
		</RotaryWrapper>
	);
};

export default Rotary;
