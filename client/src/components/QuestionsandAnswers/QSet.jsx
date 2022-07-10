import React from 'react';
import './qa.css';
import Answers from './Answers.jsx';
import { useState, useEffect } from 'react';


var QSet = ({ aFeedbackHandler, question }) => {

  var answerKeys = Object.keys(question.answers);
  var [ keyNum, setKeyNum ] = useState(0);
  var [ answers, setAnswers ] = useState([answerKeys[keyNum]]);

  var moreAnswersOption = () => {
    if (keyNum < answerKeys.length - 1) {
      return <p className='pointer' onClick={loadMoreAnswers}>LOAD MORE ANSWERS</p>
    }
  };

  var loadMoreAnswers = () => {
    setAnswers([ ...answers, answerKeys[keyNum + 1] ]);
    setKeyNum(keyNum + 1);
  };


  return (
    <div data-testid='qa-qset' className='qa-item'>
      <div className='qa-text'>
        <div className='qa-bold qa-question'>
          <div className='qa-label'>Q:</div><div className='qa-text'><p>{question.question_body}</p></div>
        </div>
          {answers.map(a => <Answers key={question.answers[a].id} answer={question.answers[a]} aFeedbackHandler={aFeedbackHandler}/>)}
        <div className='qa-more-answers'>
          {moreAnswersOption()}
        </div>
      </div>
      <div className='qa-item-right'>
        <p>Helpful? <span className='pointer underline' onClick={(e) => aFeedbackHandler('q-helpful')}>Yes({question.question_helpfulness})</span>  |  <span className='pointer underline' onClick={(e) => aFeedbackHandler('q-add')}>Add&nbsp;Answer</span></p>
      </div>
    </div>
  );
}

export default QSet;