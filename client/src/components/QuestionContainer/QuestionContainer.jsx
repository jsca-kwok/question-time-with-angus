import React from 'react';
import Axios from 'axios';
import './question-container.scss';
import QuestionCard from '../QuestionCard/QuestionCard';
import GameOver from '../GameOver/GameOver';

class QuestionContainer extends React.Component {
    state = {
        questions: [], 
        gameOver: false,
        currentStringIndex: 0,
        score: 0
    };

    componentDidMount() {
        this.getQuestion();
        this.interval = setInterval(this.getQuestion, 4500);
    }

    componentDidUpdate() {
        if (this.state.questions.length === 5) {
            return this.gameOver();
        }
    }

    getQuestion = () => {
        Axios
        .get('http://localhost:8080/play')
        .then(res => {
            this.setState({questions: [...this.state.questions,res.data]})
        })
    }

    gameOver = () => {
        clearInterval(this.interval);
        if (this.state.gameOver === false) {
            this.setState({gameOver: true})
        } else {
            return null
        }
    }

    handleChange = (e) => {
        const currentQuestionObject = this.state.questions[this.state.currentStringIndex];
        const currentQuestion = currentQuestionObject.question;
        const input = e.target.value;
        
        console.log(currentQuestion);

        if (currentQuestion === input) {
            const copyQuestionState = {...this.state};
            const newQuestionArray = copyQuestionState.questions.filter(question => {
               return question.question !== currentQuestion 
            });
            const newScore = copyQuestionState.score + 1;
            this.setState({
                questions: newQuestionArray,
                score: newScore
            })
            console.log(this.state.score);
            e.target.value = "";
        }
    }

    render() {
        return (   
            <div className="question-container">
                {
                    this.state.questions !== "" ?
                    this.state.questions.map((question, i) => {
                        return <QuestionCard question={this.state.questions[i]} key={question.id} />
                    })
                    : null
                }
                {
                    this.state.gameOver === true ? <GameOver score={this.state.score}/> : null
                }
                <input className="question-container__input" type="text" placeholder="Type here" onChange={(e) => this.handleChange(e)} />
            </div>
        )
    }
}

export default QuestionContainer;