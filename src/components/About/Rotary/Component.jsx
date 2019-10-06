import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { RotaryWrapper, RotaryText, RotaryWord } from './Component.style';
import { rotary } from '../../../content';
import { WATERFALL_2 } from '../../UI/base';
import { View } from '../../UI/components/View';
const { words, text } = rotary;

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
		<View>
			<RotaryWrapper data-test="rotary">
				<RotaryText>{text}</RotaryText>
				<CSSTransition
					in={showWord}
					classNames="fade"
					timeout={WATERFALL_2}
					onEntered={hideWord}
					onExited={changeWord}
				>
					<RotaryWord>{word}</RotaryWord>
				</CSSTransition>
			</RotaryWrapper>
		</View>
	);
};

export default Rotary;
