import React from 'react';
import './qa.css';
import { useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';
import QSet from './QSet.jsx';

var QA = (props) => {

  var [ qSearch, setQSearch ] = useState('');
  var [ questions, setQuestions ] = useState([]);

  useEffect(() => {
  }, [ questions ])

  useEffect(() => {
    (async () => {
      setQuestions(await fetch('qa' + props.productId).res.json().results);
      // var res = await fetch('qa' + props.productId);
      // var data = await res.json();
      // setQuestions(data.results);
    })();
  }, [props.productId]);


  var qHandler = (e) => {
    setQSearch(e.target.value);
  };

  var aFeedbackHandler = (e) => {
    console.log(e);
  };

  return (
    <div className='qa-container'>
      <h3 data-testid='qa-title'>QUESTIONS & ANSWERS</h3>
        <div className='qa-search-container'>
          <input data-testid='qa-search' className='qa-search' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' onChange={qHandler} />
          <i className="fa fa-search pointer"></i>
        </div>
      <div className='qa-list'>
        {questions.map(q => <QSet key={q.question_id} question={q} aFeedbackHandler={aFeedbackHandler}/>)}
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
  );
}

export default QA;