import Header from './components/Header';
import YourMove from './components/YourMove';
import Score from './components/Score';
import './assets/scss/style.scss';

function App() {
	return (
		<>
			<Header title="Rock Paper Scissors" description="Round 1" className="header" />
			<main className="main">
				<YourMove />
				<Score />
			</main>
		</>
	);
}

export default App;
