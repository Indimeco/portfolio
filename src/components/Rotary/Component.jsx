import React, { useState, useEffect } from 'react';
import { RotaryWrapper, RotaryText, RotaryWord } from './Component.style';
import { rotary } from '../../content';
import { WATERFALL_2 } from '../UI/base/animations';

const { words, text } = rotary;

export const Rotary = () => {
	const [word, setWord] = useState(words[0]);

	useEffect(() => {
		const setNewWord = () => {
			const currentIndex = words.findIndex(i => i === word);
			const nextIndex = currentIndex + 1 < words.length ? currentIndex + 1 : 0;
			setWord(words[nextIndex]);
		};
		const timeout = setTimeout(setNewWord, WATERFALL_2);

		return () => clearTimeout(timeout);
	}, [word]);

	return (
		<RotaryWrapper data-test="rotary">
			<RotaryText>{text}</RotaryText>
			<RotaryWord>{word}</RotaryWord>
		</RotaryWrapper>
	);
};

export default Rotary;
