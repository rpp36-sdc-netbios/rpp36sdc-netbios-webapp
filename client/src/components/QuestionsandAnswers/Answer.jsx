import React from 'react';

var Answer = ({ answer, feedbackHandler }) => {

  var aDate = new Date(answer.date);
  var date = monthNames[aDate.getMonth()] + ' ' + aDate.getDate() + ', ' + aDate.getFullYear();
  var id = answer.answer_id

  return (
    <React.Fragment>
      <div className='qa-answer'>
      <div className='qa-label qa-label-a'>A:</div><div className='qa-text'>&nbsp;{answer.body}</div>
      </div>
      <div className='qa-user'>
        <p>by {answer.answerer_name}, {date}  |  Helpful? <span className='pointer underline'
        onClick={(e) => feedbackHandler('answers', 'helpful', id)}>Yes</span>  |  <span className='pointer underline'
        onClick={(e) => feedbackHandler('answers', 'report', id)}>Report</span></p>
      </div>
      </React.Fragment>
  );
}

var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

export default Answer;