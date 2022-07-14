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
      var newAnswers = answers.concat(data.results);
      var aIds = [];
      setAnswers(newAnswers.filter(a => {
        if (aIds.indexOf(a.answer_id) < 0) {
          aIds.push(a.answer_id);
          return true;
        }
      }));
      data.results.length < 2 ? setMore(false) : setMore(true);
    }
  }, [ data ]);

  var loadMore = () => {
    setPage(page + 1);
  };

  var collapseAnswers = () => {
    setPage(1);
    setAnswers(answers.slice(0, 2));
  }

  return (
    <div className='qa-answer-block'>
      {answers.map(a => <Answer key={a.answer_id} answer={a} feedbackHandler={feedbackHandler} />)}
      {pending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <div className='qa-more-answers'>
        {more && <div className='pointer qa-more-answers-item' onClick={loadMore}>LOAD MORE ANSWERS</div>}
        {answers.length > 2 && <div className='pointer qa-more-answers-item' onClick={collapseAnswers}>COLLAPSE ANSWERS</div>}
      </div>
    </div>

  );
};


export default Answers