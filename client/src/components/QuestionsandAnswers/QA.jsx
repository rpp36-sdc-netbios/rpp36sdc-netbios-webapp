import React, { useState, useEffect } from 'react';
import './qa.css';
import useFetch from '../useFetch.js'
import QSet from './QSet.jsx';
import QSearch from './QSearch.jsx';

var QA = ({ productId }) => {

  var [ page, setPage ] = useState(1);
  var [ count, setCount ] = useState(2);
  var [ questions, setQuestions ] = useState([]);


  var [ data, pending, error ] = useFetch(`questions?product_id=${productId}&page=${page}&count=${count}`);

  var loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data) {
      if (page === 1) {
        setQuestions(data.results);
      } else {
        setQuestions([ ...questions, ...data.results ]);
      }
    }
  }, [ data ])

  var feedbackHandler = async ( qa, feedback, id) => {
    var res = await fetch('qa/feedback', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ qa, feedback, id})
    });
    console.log(res.status);
  };

  return (
    <div className='qa-container'>
      <h3 data-testid='qa-title'>QUESTIONS & ANSWERS</h3>
      <QSearch productId={productId} setQuestions={setQuestions}/>
      <div className='qa-list'>
        {pending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {questions.map(q => <QSet key={q.question_id + random()} question={q} feedbackHandler={feedbackHandler} />)}
      </div>
      <div className='qa-buttons'>
        <div>
          <input className='pointer' type='button' value='MORE ANSWERED QUESTIONS' onClick={loadMore} />
        </div>
        <div>
          <input className='pointer' type='button' value='ADD A QUESTION      ' /><i className="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

var random = () => {
  return Math.random() * 1000;
}


export default QA;