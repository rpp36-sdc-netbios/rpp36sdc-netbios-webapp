import React from 'react';
import './qa.css';
import Answers from './Answers.jsx';


var QSet = ({ feedbackHandler, question, term }) => {

  var id = question.question_id;

  return (
    <div data-testid='qa-qset' className='qa-item'>
      <div className='qa-text'>
        <div className='qa-bold qa-question'>
          <div className='qa-label qa-label-q'>Q:</div><div className='qa-text'>&nbsp;{question.question_body}</div>
        </div>
        <Answers questionId={question.question_id} feedbackHandler={feedbackHandler} />
      </div>
      <div className='qa-item-right'>
        <p>Helpful? <span className='pointer underline' onClick={(e) => feedbackHandler('questions', 'helpful', id)}>Yes({question.question_helpfulness})</span>
          |  <span className='pointer underline' onClick={(e) => {}}>Add&nbsp;Answer</span></p>
      </div>
    </div>
  );
}

export default QSet;