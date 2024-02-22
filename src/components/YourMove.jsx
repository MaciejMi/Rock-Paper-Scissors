import Section from './Section';
import ButtonContainer from './ButtonContainer';
import TabButton from './TabButton';

import rockImg from '../assets/img/rock.png';
import paperImg from '../assets/img/paper.png';
import scissorsImg from '../assets/img/scissors.png';
import { useState } from 'react';

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const YourMove = ({ callback }) => {
	const [chosenButton, setChosenButton] = useState();

	return (
		<Section title="Your move" className="section your-move">
			<ButtonContainer>
				<TabButton
					className="button button-game"
					id={chosenButton === ROCK ? 'active' : null}
					name={ROCK}
					image={rockImg}
					alt="White stone"
					onClick={() => setChosenButton(ROCK)}
				/>
				<TabButton
					className="button button-game"
					id={chosenButton === PAPER ? 'active' : null}
					name={PAPER}
					image={paperImg}
					alt="A white paper-like hand"
					onClick={() => setChosenButton(PAPER)}
				/>
				<TabButton
					className="button button-game"
					id={chosenButton === SCISSORS ? 'active' : null}
					name={SCISSORS}
					image={scissorsImg}
					alt="A white hand resembling scissors"
					onClick={() => setChosenButton(SCISSORS)}
				/>
			</ButtonContainer>
			<button
				id={chosenButton === undefined ? 'disabled' : null}
				className="button button-play"
				onClick={chosenButton === undefined ? null : () => callback(chosenButton)}>
				Play
			</button>
		</Section>
	);
};

export default YourMove;
