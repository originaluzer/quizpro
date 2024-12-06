// Score.js

import React from 'react'

const Score = ({ score, setScore,
	setCurrentQuestion, setQuizStarted,
	setIsLastq, setTimer }) => {
	return (
		<div>
			<div className="whole-thing">
				<div className='result-container'>
					<div>
						<h1 className="">Quiz Completed!</h1>
						<div>
							<h1 className="card-text">Your score: <span>{score}</span></h1>
							<button className="bbtn btn-primary"
								onClick={() => {
									setCurrentQuestion(0);
									setScore(0); setQuizStarted(true);
									setIsLastq(false); setTimer(60);
								}}>
								Restart Quiz
							</button>

							<a href="/quiz" className="bbtn"> Go Back To Quiz Selection</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Score;