import { useState } from 'react';

import rockImg from './assets/img/rock.png';
import paperImg from './assets/img/paper.png';
import scissorsImg from './assets/img/scissors.png';
import userImg from './assets/img/user.png';
import './assets/scss/style.scss';

function App() {
	return (
		<>
			<header className="header">
				<h1>Rock Paper Scissors</h1>
				<p>Round 1</p>
			</header>
			<main className="main">
				<section className="section your-move">
					<h2 className="section__heading">Your move</h2>
					<menu>
						<li>
							<button className="button">
								<img src={rockImg} alt="" />
								Rock
							</button>
						</li>
						<li>
							<button className="button">
								<img src={paperImg} alt="" />
								Paper
							</button>
						</li>
						<li>
							<button className="button">
								<img src={scissorsImg} alt="" />
								Scissors
							</button>
						</li>
					</menu>
					<button className="button button-play">Play</button>
				</section>
				<section className="section score">
					<h2 className="section__heading">Score</h2>
					<div className="players-container">
						<div className="player-box">
							<div className="player-profile">
								<div class="player-image">
									<img src={userImg} alt="" />
								</div>
								<div class = "player-stats">
									<p>0</p>
									<p>You</p>
								</div>
							</div>
							<img src={rockImg} alt="" />
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
