import React from 'react';
import { Entry, EntryText, EntryIcon, Blink } from './Component.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { View } from '../../UI/components';
import { about } from '../../../content';

const BlinkRunner = () => (
	<EntryText>
		<Blink>_</Blink>
	</EntryText>
);

const Terminal = () => <EntryText>> </EntryText>;

const Log = () => {
	return (
		<View>
			<div data-test="log">
				{about.map((entry, index) => {
					return (
						<Entry
							key={`entry${index}`}
							data-test="log-entry"
							altStyle={index % 2 !== 0}
						>
							<Terminal />
							{entry.map((item, itemIndex) =>
								typeof item === 'string' ? (
									<EntryText key={`entry-text${index}-${itemIndex}`}>
										{item}
									</EntryText>
								) : (
									<EntryIcon
										key={`entry-icon${index}-${itemIndex}`}
										data-test="log-entry-icon"
									>
										<FontAwesomeIcon icon={item}></FontAwesomeIcon>
									</EntryIcon>
								),
							)}
							<BlinkRunner />
						</Entry>
					);
				})}
			</div>
		</View>
	);
};

export default Log;
