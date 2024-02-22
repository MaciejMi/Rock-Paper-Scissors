import Header from './components/Header';
import YourMove from './components/YourMove';
import Score from './components/Score';
import './assets/scss/style.scss';
import { useState } from 'react';

const FIGURES = ['rock', 'paper', 'scissors'];

function App() {
	const [round, setRound] = useState(0);

	const [playerData, setPlayerData] = useState({ points: 0, choose: 'question' });
	const [computerData, setComputerData] = useState({ points: 0, choose: 'question' });

	const playHandler = playerChosen => {
		const playerChose = playerChosen;
		const computerChose = FIGURES[Math.floor(Math.random() * 3)];

		let playerPoints = playerData.points,
			computerPoints = computerData.points;
		if (
			(playerChose === 'rock' && computerChose === 'scissors') ||
			(playerChose === 'paper' && computerChose === 'rock') ||
			(playerChose === 'scissors' && computerChose === 'paper')
		) {
			playerPoints = playerData.points + 1;
		} else if (!(playerChose === computerChose)) {
			computerPoints = computerData.points + 1;
		}
		setPlayerData({ points: playerPoints, choose: playerChose });
		setComputerData({ points: computerPoints, choose: computerChose });
		setRound(round + 1);
	};

	return (
		<>
			<Header title="Rock Paper Scissors" description={`Round ${round}`} className="header" />
			<main>
				<YourMove className="section your-move" callback={playHandler} />
				<Score
					className="section score"
					playerPoints={playerData.points}
					computerPoints={computerData.points}
					playerFigure={playerData.choose}
					computerFigure={computerData.choose}
				/>
			</main>
		</>
	);
}

export default App;
