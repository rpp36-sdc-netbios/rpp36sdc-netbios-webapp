import React from 'react';
import './qa.css';
import { useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';

var QA = (props) => {
  var [ qSearch, setQSearch ] = useState('');
  var [ waiting, setWaiting ] = useState(true);
  var [ questions, setQuestions ] = useState([]);
  var temp = true;

  var search = () => {
    if (!waiting) {
      console.log(qSearch);
    }
  }

  useEffect(() => {
    fetch('qa' + props.productId)
    .then(res => {
      return res.json();
    }).then(data => {
      setQuestions(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    if (temp) {
      setTimeout(() => {
        setWaiting(false)
      }, 3000)
      temp = false;
    }
    search();
  }, [qSearch]);

  var qHandler = (e) => {
    setQSearch(e.target.value);
  };

  var aFeedbackHandler = (e) => {
    console.log(e);
  };

  return (
    <div className='qa-container'>
      <h3>QUESTIONS & ANSWERS</h3>
      <div>
        <div className='qa-search-container'>
          <input className='qa-search' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' onChange={qHandler} />
          <i className="fa fa-search pointer"></i>
        </div>
      </div>
      <div className='qa-list'>
        <div className='qa-item'>
          <div className='qa-text'>
            <div className='qa-bold qa-question'>
              <div className='qa-label'>Q:</div><div className='qa-text'><p>Who What Which When Where Why Whether How?</p></div>
            </div>
            <div className='qa-answer'>
              <div className='qa-bold qa-label'>A:</div><div className='qa-text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quasi sint atque, ad nobis culpa at quia. Repellat, provident excepturi soluta officia aut placeat corporis laborum quia, earum esse error!</p></div>
            </div>
          </div>
          <div className='qa-item-right'>
            <p>Helpful? <span className='pointer' onClick={(e) => aFeedbackHandler('helpful')}>Yes</span>  |  <span className='pointer' onClick={(e) => aFeedbackHandler('add')}>Add Answer</span></p>
          </div>
          <div className='qa-user'>
            <p>by User, Date  |  Helpful? <span className='pointer' onClick={(e) => aFeedbackHandler('helpful')}>Yes</span>  |  <span className='pointer' onClick={(e) => aFeedbackHandler('report')}>Report</span></p>
          </div>
        </div>
        <div className='qa-item'>
          <div className='qa-text'>
            <div className='qa-bold qa-question'>
              <div className='qa-label'>Q:</div><div className='qa-text'><p>Who What Which When Where Why Whether How?</p></div>
            </div>
              <div className='qa-answer'>
            <div className='qa-bold qa-label'>A:</div><div className='qa-text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quasi sint atque, ad nobis culpa at quia. Repellat, provident excepturi soluta officia aut placeat corporis laborum quia, earum esse error!</p></div>
            </div>
          </div>
          <div className='qa-item-right'>
            <p>Helpful? <span className='pointer'  onClick={(e) => aFeedbackHandler('helpful')}>Yes</span>  |  <span className='pointer' onClick={(e) => aFeedbackHandler('add')}>Add Answer</span></p>
          </div>
          <div className='qa-user'>
            <p>by User, Date  |  Helpful? <span className='pointer' onClick={(e) => aFeedbackHandler('helpful')}>Yes</span>  |  <span className='pointer' onClick={(e) => aFeedbackHandler('report')}>Report</span></p>
          </div>
        </div>
        <div className='qa-more-answers'>
          <p className='pointer'>LOAD MORE ANSWERS</p>
        </div>
      </div>
      <div className='qa-buttons'>
        <div>
          <input className='pointer' type='button' value='MORE ANSWERED QUESTIONS' />
        </div>
        <div>
          <input className='pointer' type='button' value='ADD A QUESTION      ' /><i className="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default QA;