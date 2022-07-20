import React, { useState } from 'react';
import './qa.css';
import Answers from './Answers.jsx';


var QSet = ({ question }) => {

  var id = question.question_id;
  var [ helpfulness, setHelpfulness ] = useState(question.question_helpfulness);

  var feedbackHandler = async ( qa, feedback, id) => {
    var res = await fetch('qa/feedback', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ qa, feedback, id})
    });
    if (res.ok) {
      setHelpfulness(helpfulness + 1);
    }
  };

  return (
    <div data-testid='qa-qset' className='qa-item'>
      <div className='qa-text'>
        <div className='qa-bold qa-question'>
          <div className='qa-text'><span>Q:</span>&nbsp;{question.question_body}</div>
        </div>
        <Answers questionId={question.question_id} feedbackHandler={feedbackHandler} />
      </div>
      <div className='qa-item-right'>
        <p>Helpful? <span data-testid='qa-question-helpful' className='pointer underline' onClick={(e) => feedbackHandler('questions', 'helpful', id)}>Yes<span>({helpfulness})</span></span>&nbsp;|&nbsp;<span className='pointer underline' onClick={(e) => {}}>Add&nbsp;Answer</span></p>
      </div>
    </div>
  );
}

export default QSet;