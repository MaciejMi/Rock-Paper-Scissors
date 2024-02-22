import Header from './components/Header';
import YourMove from './components/YourMove';
import Score from './components/Score';
import './assets/scss/style.scss';
import { useState } from 'react';

const FIGURES = ['rock', 'paper', 'scissors'];

function App() {
	const [round, setRound] = useState(0);
	const [playerPoints, setPlayerPoints] = useState(0);
	const [computerPoints, setComputerPoints] = useState(0);
	const [playerChoose, setPlayerChoose] = useState('question');
	const [computerChoose, setComputerChoose] = useState('question');

	const playHandler = playerChosen => {
		const playerChose = playerChosen;
		const computerChose = FIGURES[Math.floor(Math.random() * 3)];
		if (
			(playerChose === 'rock' && computerChose === 'scissors') ||
			(playerChose === 'paper' && computerChose === 'rock') ||
			(playerChose === 'scissors' && computerChose === 'paper')
		) {
			setPlayerPoints(playerPoints + 1);
		} else if (!(playerChose === computerChose)) {
			setComputerPoints(computerPoints + 1);
		}
		setPlayerChoose(playerChose);
		setComputerChoose(computerChose);
		setRound(round + 1);
	};

	return (
		<>
			<Header title="Rock Paper Scissors" description={`Round ${round}`} className="header" />
			<main>
				<YourMove className="section your-move" callback={playHandler} />
				<Score
					className="section score"
					playerPoints={playerPoints}
					computerPoints={computerPoints}
					playerFigure={playerChoose}
					computerFigure={computerChoose}
				/>
			</main>
		</>
	);
}

export default App;
