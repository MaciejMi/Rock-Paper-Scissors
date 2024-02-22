import Section from './Section';
import PlayerBox from './PlayerBox';

import rockImg from '../assets/img/rock.png';
import paperImg from '../assets/img/paper.png';
import scissorsImg from '../assets/img/scissors.png';

import { useState } from 'react';

const Score = ({ playerPoints, computerPoints, playerFigure, computerFigure, ...props }) => {
	let playerData = {},
		computerData = {};

	console.log(playerFigure, computerFigure);

	if (playerFigure === 'rock') {
		playerData.image = rockImg;
		playerData.alt = 'White stone';
	} else if (playerFigure === 'paper') {
		playerData.image = paperImg;
		playerData.alt = ' A white paper-like hand';
	} else if (playerFigure === 'scissors') {
		playerData.image = scissorsImg;
		playerData.alt = 'A white hand resembling scissors';
	}

	if (computerFigure === 'rock') {
		computerData.image = rockImg;
		computerData.alt = 'White stone';
	} else if (computerFigure === 'paper') {
		computerData.image = paperImg;
		computerData.alt = ' A white paper-like hand';
	} else if (computerFigure === 'scissors') {
		computerData.image = scissorsImg;
		computerData.alt = 'A white hand resembling scissors';
	}

	return (
		<Section title="Score" {...props}>
			<div className="players-container">
				<PlayerBox
					className="player-box"
					name="You"
					score={playerPoints}
					figureImg={playerData.image}
					altFigureImg={playerData.alt}></PlayerBox>
				<PlayerBox
					className="player-box"
					name="Computer"
					score={computerPoints}
					figureImg={computerData.image}
					altFigureImg={computerData.alt}></PlayerBox>
			</div>
		</Section>
	);
};

export default Score;
