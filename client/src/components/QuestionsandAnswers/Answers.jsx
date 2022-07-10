import React from 'react';

var Answers = ({ aFeedbackHandler, answer }) => {

  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var aDate = new Date(answer.date);

  var date = monthNames[aDate.getMonth()] + ' ' + aDate.getDate() + ', ' + aDate.getFullYear();
  return (
    <div data-testid='qa-answer' className='qa-answer-block'>
      <div className='qa-answer'>
        <div className='qa-bold qa-label'>A:</div>
        <p>{answer.body}</p>
      </div>
      <div className='qa-user'>
        <p>by {answer.answerer_name}, {date}  |  Helpful? <span className='pointer underline' onClick={(e) => aFeedbackHandler('a-helpful')}>Yes</span>  |  <span className='pointer underline' onClick={(e) => aFeedbackHandler('a-report')}>Report</span></p>
      </div>
    </div>
  );
};

export default Answers