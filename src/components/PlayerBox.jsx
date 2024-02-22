import userImg from '../assets/img/user.png';
import questionImg from '../assets/img/question.png';

const PlayerBox = ({ name, score, figureImg = questionImg, altFigureImg = 'question mark', ...props }) => {
	return (
		<div {...props}>
			<div className="player-profile">
				<div className="player-image">
					<img src={userImg} alt="Image of the user" />
				</div>
				<div className="player-stats">
					<p>{score}</p>
					<p>{name}</p>
				</div>
			</div>
			<img src={figureImg} alt={altFigureImg} />
		</div>
	);
};

export default PlayerBox;
