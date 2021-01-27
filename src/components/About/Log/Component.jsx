import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { about } from '../../../content';
import { FadeOnScroll } from '../../UI/utils';

import { LogView, Entry, EntryText, EntryIcon, Blink } from './Component.style';

const BlinkRunner = () => (
	<EntryText>
		<Blink>_</Blink>
	</EntryText>
);

const Terminal = () => <EntryText>{'>'} </EntryText>;

const Log = () => {
	return (
		<LogView data-testid="log">
			<div>
				{about.map((entry, index) => (
					<FadeOnScroll key={`entry${index}`}>
						<Entry data-testid="log-entry" altStyle={index % 2 !== 0}>
							<Terminal />
							{entry.map((item, itemIndex) =>
								typeof item === 'string' ? (
									<EntryText key={`entry-text${index}-${itemIndex}`}>{item}</EntryText>
								) : (
									<EntryIcon key={`entry-icon${index}-${itemIndex}`} data-testid="log-entry-icon">
										<FontAwesomeIcon icon={item} />
									</EntryIcon>
								),
							)}
							<BlinkRunner />
						</Entry>
					</FadeOnScroll>
				))}
			</div>
		</LogView>
	);
};

export default Log;
