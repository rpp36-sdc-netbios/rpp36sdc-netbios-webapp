import React, { useState } from 'react';
import './qa.css';
import Answers from './Answers.jsx';
import AddAnswer from './AddAnswer.jsx';


var QSet = ({ question, productName, search }) => {

  var id = question.question_id;
  var [ helpfulness, setHelpfulness ] = useState(question.question_helpfulness);
  var [ addAnswer, setAddAnswer ] = useState(false);

  var feedbackHandler = async ( qa, feedback, id, e) => {
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
      e.target.style.color = 'blue';
    }
  };

  var showAddAnswer = (val) => {
    setAddAnswer(val);
  };

  return (
    <div data-testid='qa-qset' className='qa-item'>
      <div className='qa-text'>
        <div data-testid='qa-question' className='qa-bold qa-question'>
          <div className='qa-text'><span>Q:</span>&nbsp;{question.question_body}</div>
        </div>
        <Answers questionId={question.question_id} feedbackHandler={feedbackHandler} />
      </div>
      <div className='qa-item-right'>
        <p>Helpful? <span data-testid='qa-question-helpful' className='pointer underline' onClick={(e) => {feedbackHandler('questions', 'helpful', id, e)}}>Yes({helpfulness})</span>&nbsp;|&nbsp;<span className='pointer underline' onClick={() => showAddAnswer(true)}>Add&nbsp;Answer</span></p>
      </div>
      {addAnswer && <AddAnswer showAddAnswer={showAddAnswer} productName={productName} questionId={question.question_id} question={question.question_body}/>}
    </div>
  );
}

export default QSet;