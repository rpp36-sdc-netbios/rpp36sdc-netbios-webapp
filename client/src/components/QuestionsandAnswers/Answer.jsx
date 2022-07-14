import React from 'react';

var Answer = ({ answer, feedbackHandler }) => {

  var aDate = new Date(answer.date);
  var date = monthNames[aDate.getMonth()] + ' ' + aDate.getDate() + ', ' + aDate.getFullYear();
  var id = answer.answer_id


  return (
    <React.Fragment>
      <div className='qa-answer'>
        <div data-testid='qa-answer' className='qa-text'><span className='qa-label'>A:</span>&nbsp;{answer.body}</div>
      </div>
      <div className='qa-user'>
        by {answer.answerer_name}, <span className='qa-date'>{date}</span>&nbsp;|&nbsp;Helpful?&nbsp;<span className='pointer underline'
        onClick={(e) => feedbackHandler('answers', 'helpful', id)}>Yes</span>&nbsp;|&nbsp;<span className='pointer underline'
        onClick={(e) => feedbackHandler('answers', 'report', id)}>Report</span>
      </div>
      </React.Fragment>
  );
}

var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

export default Answer;