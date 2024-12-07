import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Questions from './Questions';
import Score from './Score';
import { data } from './CS-Questions'





function TakeQuiz() {
    const [questions, setQuestions] = useState("");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	// set time for each question
	const [timer, setTimer] = useState(60);

	const [quizStarted, setQuizStarted] = useState(false);
	const [isLastq, setIsLastq] = useState(false)

  

	useEffect(() => {
		if (quizStarted) {
			const interval = setInterval(() => {
				setTimer(prevTimer => {
					if (prevTimer > 0) {
						return prevTimer - 1;
					} else {
						setCurrentQuestion(prevQuestion => prevQuestion + 1);
						// Reset timer for the next question
						return 60;
					}
				});
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [currentQuestion, quizStarted]);

	const handleAnswerClick = (selectedAnswer) => {
		if (selectedAnswer === questions[currentQuestion].correct_answer) {
			setScore(prevScore => prevScore + 1);
		}
	};


	const handleNextQuestion = () => {
		if (currentQuestion + 2 === questions.length) {
			setIsLastq(true)
		}
		setCurrentQuestion(prevQuestion => prevQuestion + 1);
		setTimer(60);
	}

	const startQuiz = () => {
		setQuizStarted(true);
	};

    //const [questions, setQuestions] = useState([]);
    const [dataObj, setDataObj] = useState([]);
    const [loading, setLoading] = useState(true);

    const quizObj = {
        "General Knowledge": 9,
        "Entertainment: Film": 11,
        "Geography": 22,
        "History": 23,
        "Sports": 21,
        "Celebrities": 26,
        "Politics":10,
        "Art":25,
        "Animals":27,
        "Vehicles":28,
        "Mythology":20,
        "Science: Mathematics":19,
        "Entertainment: Japanese Anime & Manga":31,
        
    }

    useEffect(() => {
        // Get quiz data from localStorage when the component mounts
        const storedQuizData = localStorage.getItem('quizData');
        if (storedQuizData) {
            setDataObj(JSON.parse(storedQuizData)); // Parse the stored string back into an object
        }
    }, []);

    useEffect(() => {
        // Only fetch questions if we have valid quiz data
        if (Object.keys(dataObj).length != 0) {
            fetchQuestions(dataObj.subject, dataObj.type, dataObj.difficulty);
        }
    }, [dataObj]);

    const fetchQuestions = async (subject, type, difficulty) => {
        try {
            if (type == "Multiple Choice") {
                type = "multiple"
            }
            if (type == "True/False") {
                type = "Boolean"
            }
            if(subject == "Computers"){
                setQuestions(data);
            }
            type = type.toLowerCase();
            difficulty = difficulty.toLowerCase();
            subject = quizObj[subject]
            let apiUrl;
            console.log(type);
            if(type == "boolean"){

                apiUrl = `https://opentdb.com/api.php?amount=10&category=${subject}&type=${type}`
            }else{

                apiUrl = `https://opentdb.com/api.php?amount=10&category=${subject}&difficulty=${difficulty}&type=${type}`
            }
            fetch(apiUrl)
                .then((response) => {
                    return response.json().then((data) => {
                        console.log(data.results);
                        setQuestions(data.results);
                        return data;
                    }).catch((err) => {
                        console.log(err);
                    })
                });
            //const data = await response.json();
            //setQuestions(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching questions:", error);
            setLoading(false);
        }
    };

    return (
        <>
        <div className=""
                style={{  height: '100vh' }}>
                    {!quizStarted ? (
                        <div className="start-container">
                                                 
                                    <button className="start-button"
                                        onClick={startQuiz}>
                                        Start Quiz
                                    </button>       
                       </div>
                    ) : currentQuestion < questions.length ? (
                        <Questions
                            questions={questions}
                            handleNextQuestion={handleNextQuestion}
                            currentQuestion={currentQuestion}
                            handleAnswerClick={handleAnswerClick}
                            timer={timer}
                            isLastq={isLastq}
                        />
                    ) : (
                        <Score
                            score={score}
                            setScore={setScore}
                            setCurrentQuestion={setCurrentQuestion}
                            setQuizStarted={setQuizStarted}
                            setIsLastq={setIsLastq}
                            setTimer={setTimer}
                        />
                    )}
            </div>
        </>

    )
}

export default TakeQuiz