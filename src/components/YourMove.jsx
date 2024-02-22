import Section from './Section';
import ButtonContainer from './ButtonContainer';
import TabButton from './TabButton';

import rockImg from '../assets/img/rock.png';
import paperImg from '../assets/img/paper.png';
import scissorsImg from '../assets/img/scissors.png';

const YourMove = () => {
	return (
		<Section title="Your move" className="section your-move">
			<ButtonContainer>
				<TabButton className="button button-game" name="rock" image={rockImg} alt="White stone" />
				<TabButton className="button button-game" name="paper" image={paperImg} akt="A white paper-like hand" />
				<TabButton
					className="button button-game"
					name="scissors"
					image={scissorsImg}
					alt="A white hand resembling scissors"
				/>
			</ButtonContainer>
			<button className="button button-play">Play</button>
		</Section>
	);
};

export default YourMove;
