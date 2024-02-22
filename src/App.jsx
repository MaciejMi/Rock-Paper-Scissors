import Header from './components/Header';
import YourMove from './components/YourMove';
import Score from './components/Score';
import './assets/scss/style.scss';

function App() {
	const playHandler = playerChose => {
		console.log(13);
	};

	return (
		<>
			<Header title="Rock Paper Scissors" description="Round 1" className="header" />
			<main>
				<YourMove callback={playHandler} />
				<Score />
			</main>
		</>
	);
}

export default App;
