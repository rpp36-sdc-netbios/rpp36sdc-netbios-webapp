import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch.js';
import Answer from './Answer.jsx';

var Answers = ({ feedbackHandler, questionId }) => {

  var [ page, setPage ] = useState(1);
  var [ count, setCount ] = useState(2);
  var [ answers, setAnswers ] = useState([]);
  var [ more, setMore ] = useState(false);

  var [ data, pending, error ] = useFetch(`answers/${questionId}?page=${page}&count=${count}`);

  useEffect(() => {
    if (data) {
      setAnswers([...answers, ...data.results])
      data.results.length < 2 ? setMore(false) : setMore(true);
    }
  }, [ data ]);

  var loadMore = () => {
    setPage(page + 1);
  };


  return (
    <div className='qa-answer-block'>
      {answers.map(a => <Answer key={a.answer_id + random()} answer={a} feedbackHandler={feedbackHandler} />)}
      {more && <p className='pointer qa-more-answers' onClick={loadMore}>LOAD MORE ANSWERS</p>}
    </div>

  );
};

var random = () => {
  return Math.random() * 1000;
}


export default Answers