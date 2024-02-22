import Section from './Section';
import PlayerBox from './PlayerBox';

const Score = () => {
	return (
		<Section title="Score" className="section score">
			<div className="players-container">
				<PlayerBox className="player-box" name="You" score="0"></PlayerBox>
				<PlayerBox className="player-box" name="Computer" score="0"></PlayerBox>
			</div>
		</Section>
	);
};

export default Score;
