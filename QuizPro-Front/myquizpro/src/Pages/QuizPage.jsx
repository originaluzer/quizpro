import { useState, useEffect } from 'react';
import Questions from './Questions';
import Score from './Score';
import { Link } from 'react-router-dom';



function QuizPage() {

	const handleQuizSelect = (quiz) => {
		// Store quiz data in localStorage when a user selects a quiz
		localStorage.setItem('quizData', JSON.stringify(quiz));
	  };
	

	const quizData = [
		{ subject: "Geography", type: 'Multiple Choice', difficulty: 'Medium',image:"https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&w=1200"},
		{ subject: "General Knowledge", type: 'Multiple Choice', difficulty: 'Medium',image:"https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1200"},
		{ subject: 'History', type: 'Multiple Choice', difficulty: 'Hard',image:"https://images.pexels.com/photos/36006/renaissance-schallaburg-figures-facade.jpg?auto=compress&cs=tinysrgb&w=1200" }, 
		{ subject: 	"Entertainment: Film", type: 'Multiple Choice', difficulty: 'Hard',image:"https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1200"}, 
		{ subject: 	"Sports", type: 'Multiple Choice', difficulty: 'Easy',image:"https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1200" }, 
		{ subject: 'Politics', type: 'Multiple Choice', difficulty: 'Easy',image:"https://images.pexels.com/photos/4669146/pexels-photo-4669146.jpeg?auto=compress&cs=tinysrgb&w=1200" },
		{ subject: 'Art', type: 'Multiple Choice', difficulty: 'Easy',image:"https://images.pexels.com/photos/1161542/pexels-photo-1161542.jpeg?auto=compress&cs=tinysrgb&w=1200" },
		{ subject: 'Animals', type: 'Multiple Choice', difficulty: 'Medium',image:"https://images.pexels.com/photos/1431465/pexels-photo-1431465.jpeg?auto=compress&cs=tinysrgb&w=1200" },
		{ subject: 'Vehicles', type: 'Multiple Choice', difficulty: 'Easy',image:"https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1200" },
		{ subject: 'Mythology', type: 'Multiple Choice', difficulty: 'Medium',image:"https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=1600" },
		{ subject: 'Science: Mathematics', type: 'Multiple Choice', difficulty: 'Medium',image:"https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1600" },
		{ subject: 'Computers', type: 'Multiple Choice', difficulty: 'Medium',image:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1600" },

	];

	return (
		<>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
					<div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
						<a href="/" aria-label="Item" className="mr-3">
							<div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
								<svg
									className="w-12 h-12 text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</div>
						</a>
						<h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
							<span className="inline-block mb-2">Featured Quiz</span>
							<div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
						</h2>
					</div>
				{/* 	<p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
						Heading Text
					</p> */}
				</div>

				{/* Geoggraphy Card begin  */}

				<div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">	
					{quizData.map((quiz, index) => (
						<Link
							key={index}
							to={{
								pathname: "/take-quiz",
							/* 	state: {
									subject: quiz.subject,
									type: quiz.type,
									difficulty: quiz.difficulty,
								}, */
							}}
							 onClick={() => handleQuizSelect(quiz)} 
						>
							<div >
								<div>
									<img
										className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
										src={quiz.image}
										alt=""
									/>
									<p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
										{quiz.subject}
									</p>
									<p className="text-gray-700">
										{quiz.type} | {quiz.difficulty}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>		
		</>
	);
}

export default QuizPage



