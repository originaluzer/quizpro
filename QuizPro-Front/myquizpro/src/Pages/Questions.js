
import '.././Assets/Styles/quiz.css'
import ChatbotIcon from "../Components/ChatbotIcon"
import Modal from "../Components/Modal"
import {useState} from "react"
import Groq from "groq-sdk";



const Questions = ({ questions, 
					handleNextQuestion, 
					currentQuestion, 
					handleAnswerClick, timer, isLastq }) => {
	const optionIds = ['A', 'B', 'C', 'D'];
	const [selectedOption, setSelectedOption] = useState(null);
	const handleOptionClick = (option) => {
		setSelectedOption(option);
		handleAnswerClick(option);
	};

	function decodeHtmlEntities(str) {
		var textArea = document.createElement('textarea');
		textArea.innerHTML = str;
		return textArea.value;
	}
	
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalText, setModalText] = useState('');

	const openModal = (text) => {
		const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ,dangerouslyAllowBrowser: true});
		async function main() {
		const completion = await groq.chat.completions
		  .create({
			messages: [
			  {
				role: "user",
				content: `Give me a hint but not the answer for this: ${questions[currentQuestion].question}?`,
			  },
			],
			model: "llama3-8b-8192",
		  })
		  .then((chatCompletion) => {
			setModalText(chatCompletion.choices[0]?.message?.content || "");
		  });
	  }
	  main()
	  setIsModalOpen(true);
		
	  };


	return (
		<div className="whole-thing">
			<div className="quiz-container">
				<div >
					<p className="mt-2 text-yellow-500">
						<div><span class="active-question-no">Q{currentQuestion + 1}</span><span class="total-question">/{questions.length}</span></div>
					Time remaining: {timer}
					</p>
					<h4 className="card-text">
					{ decodeHtmlEntities(questions[currentQuestion].question)}
					</h4>
					<div className="list-group">
						<ul>
						{ 
						[...questions[currentQuestion].incorrect_answers,questions[currentQuestion].correct_answer]
													.map((option, index) => (
							<li
								key={index}
								className= { `list-group-item 
									list-group-item-action 
									mt-2 ${ 
										selectedOption === option ? 'active' : ''
									}`}
									onClick={() => handleOptionClick(option)}
									style={{ 
									backgroundColor: 
									selectedOption === option ? 
										'lightblue' : 'white', 
									border: '1px solid gray' }}
							>
								{optionIds[index]}{')'} {decodeHtmlEntities(option)}
							</li>
						))}
						</ul>
					</div>
					<br/>
					<div className="flex flex-wrap -mx-2">
						<div className="flex">
							<p className=" hiddens">
								Question {currentQuestion + 1}
									of {questions.length}
							</p>
						</div>
						<div className="flex">
							{ isLastq?(
							<button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-700 text-white inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm-sm"
									onClick={handleNextQuestion}>
									Submit
							</button>

							):(
							<button className=""
									onClick={handleNextQuestion}>
									Next Question
							</button>
							)}
							<button onClick={() => openModal('')} class="chat-button"><ChatbotIcon></ChatbotIcon></button>
							<Modal isOpen={isModalOpen} text={modalText} onClose={() => setIsModalOpen(false)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Questions;