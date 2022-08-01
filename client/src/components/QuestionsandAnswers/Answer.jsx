import React, {useState} from 'react';
import PhotoView from './PhotoView.jsx';

var Answer = ({ answer, feedbackHandler }) => {

  var [ photo, setPhoto ] = useState('');

  var aDate = new Date(answer.date);
  var date = monthNames[aDate.getMonth()] + ' ' + aDate.getDate() + ', ' + aDate.getFullYear();
  var id = answer.answer_id;
  var photos = answer.photos;

  var getPhotos = () => {
    return (
        <div className='qa-answer-photos'>
          {photos.map(photo => <img data-testid='answer-photo' onClick={() => viewPhoto(photo.url)} className='qa-photo' key={photo.id} src={photo.url} />)}
        </div>
    );
  }

  var viewPhoto = (photo) => {
    setPhoto(photo);
  };

  return (
    <React.Fragment>
      <div className='qa-answer'>
        <div data-testid='qa-answer' className='qa-text'><span className='qa-label'>A:</span>&nbsp;{answer.body}</div>
      </div>
      {photos.length > 0 && getPhotos()}
      <div className='qa-user'>
        by {answer.answerer_name}, <span className='qa-date'>{date}</span>&nbsp;|&nbsp;Helpful?&nbsp;<span className='pointer underline'
        onClick={(e) => feedbackHandler('answers', 'helpful', id, e)}>Yes</span>&nbsp;|&nbsp;<span className='pointer underline'
        onClick={(e) => feedbackHandler('answers', 'report', id, e)}>Report</span>
      </div>
      {photo && <PhotoView photo={photo} setPhoto={setPhoto}/>}
      </React.Fragment>
  );
}

var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

export default Answer;