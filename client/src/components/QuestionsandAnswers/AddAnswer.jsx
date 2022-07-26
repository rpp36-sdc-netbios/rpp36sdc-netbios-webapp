import React, { useState, useEffect } from 'react';

var AddQuestion = ({ showAddAnswer, questionId, productName, question }) => {

  var [answer, setAnswer] = useState('');
  var [nickname, setNickname] = useState('');
  var [email, setEmail] = useState('');
  var [message, setMessage] = useState(null);
  var [addPhotos, setAddPhotos] = useState(false);
  var [photos, setPhotos] = useState([]);

  var handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@') || !nickname || !question) {
      setMessage('Invalid information');
      return;
    }
    var res = await fetch('answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question_id: questionId,
        body: answer,
        name: nickname,
        email,
        photos
      })
    });
    if (res.ok) {
      setMessage('Answer added');
    }
  };

  var handleInputChange = (e, setter) => {
    setMessage(null);
    setter(e.target.value);
  };

  var showAddPhotos = () => {
    return (
      <div className='qa-add-photos qa-add-question'>
        <label>Photo URL</label>
        <input id='qa-user-photo' type='file' name='image' />
        <button onClick={addPhoto} type='button'>Add</button>
        <button onClick={() => setAddPhotos(!addPhotos)} type='button'>Done</button>
          {photos.length > 0 && <div style={{marginTop: '15px'}}>Click Image to Remove</div>}
        <div className='qa-user-photos'>
          {photos.map(photo => <img key={photo} onClick={removePhoto} className='qa-user-photo-added' src={photo}/>)}
        </div>
      </div>
    );
  };

  var addPhoto = async () => {
    var upload = document.getElementById('qa-user-photo');
    var formData = new FormData();
    formData.append(upload.name, upload.files[0]);
    var res = await fetch('image', {
      method: 'POST',
      body: formData
    });
    var data = await res.json();
    console.log(data);
    setPhotos([...photos, data.url]);
  }

  var removePhoto = (e) => {
    var src = e.target.src;
    for (var i = 0; i < photos.length; i++) {
      if (photos[i] === src) {
        var temp = [...photos];
        temp.splice(i, 1);
        setPhotos(temp);
        return;
      }
    }
  }


  return (
    <div className='qa-add-question'>
      <div className='qa-add-question-header'>
        <div>
          <div className='qa-add-question-title'>Submit your Answer</div>
          <div className='qa-add-question-subtitle'>{productName}: {question}</div>
        </div>
        <div className='pointer qa-add-question-x' onClick={() => showAddAnswer(false)}>X</div>
      </div>
      <form id='qa-add-question-form' className='qa-add-question-form' onSubmit={handleSubmit}>
        <label htmlFor='qa-user-question'>Your Answer</label>
        <input id='qa-user-question' onChange={(e) => handleInputChange(e, setAnswer)} placeholder='ENTER YOUR ANSWER HERE' style={{width: '80%'}} required />
        <label htmlFor='qa-user-nickname'>What Is Your Nickname</label>
        <input id='qa-user-nickname' onChange={(e) => handleInputChange(e, setNickname)} placeholder='ENTER YOUR NICKNAME HERE' style={{width: '50%'}} required />
        <label htmlFor='qa-user-email'>Your Email</label>
        <input id='qa-user-email' onChange={(e) => handleInputChange(e, setEmail)} placeholder='ENTER YOUR EMAIL HERE' style={{width: '50%'}} required />
        <button type='button' onClick={() => setAddPhotos(!addPhotos)}>Add Photos</button>
        <input data-testid='qa-addQuestion-submit' id='qa-user-submit' type='submit' />
        {message && <div>{message}</div>}
        {addPhotos && showAddPhotos()}
      </form>
    </div>
  );
};

export default AddQuestion;