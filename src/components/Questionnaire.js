import React, { Component } from 'react';
import Slide from '../containers/Slide';


export default class Questionnaire extends Component {

    renderSlide(question){
        return <Slide question={question} key={question.id}/>;
    }

    renderSlides(questions){
        return questions.map((question) => {
            return this.renderSlide(question)
        })
    }

    render() {
        return (
            <div className="questionnaire">
                {this.renderSlides(this.props.questions)}
            </div>
        );
    }

    componentDidMount(){
        this.props.actions.fetchQuestions().then( () =>  {
        });
    }
}