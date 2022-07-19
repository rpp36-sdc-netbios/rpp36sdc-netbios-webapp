import React, { useState, useEffect } from 'react';
import './qa.css';
import useFetch from '../useFetch.js'
import QSet from './QSet.jsx';
import QSearch from './QSearch.jsx';
import AddQuestion from './AddQuestion.jsx';

var QA = ({ productId, product }) => {

  var [ page, setPage ] = useState(1);
  var [ count, setCount ] = useState(2);
  var [ questions, setQuestions ] = useState([]);
  var [ addQuestion, setAddQuestion ] = useState(false);

  var [ data, pending, error ] = useFetch(`questions?product_id=${productId}&page=${page}&count=${count}`);

  var loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setQuestions([]);
  }, [ productId ]);

  useEffect(() => {
    if (data) {
      if (page === 1) {
        setQuestions(data.results);
      } else {
        var newQuestions = questions.concat(data.results);
        var qIds = [];
        setQuestions(newQuestions.filter(q => {
          if (qIds.indexOf(q.question_id) < 0) {
            qIds.push(q.question_id);
            return true;
          }
        }));
      }
    }
  }, [ data ]);

  var showAddQuestion = (showAddModal) => {
    setAddQuestion(showAddModal);
  };

  return (
    <div className='qa-container'>
      <h3 data-testid='qa-title'>QUESTIONS & ANSWERS</h3>
      <QSearch productId={productId} setQuestions={setQuestions}/>
      <div className='qa-list'>
        {questions.map(q => <QSet key={q.question_id} question={q} />)}
        {pending && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
      <div className='qa-buttons'>
        <div>
          <button className='pointer' type='button' onClick={loadMore}>MORE ANSWERED QUESTIONS</button>
        </div>
        <div>
          <button className='pointer qa-add-button' type='button' onClick={() => showAddQuestion(true)}>ADD A QUESTION</button><div onClick={() => showAddQuestion(true)} className='qa-plus pointer'>+</div>
        </div>
      </div>
      {addQuestion && <AddQuestion productName={product.name} showAddQuestion={showAddQuestion}/>}
    </div>
  );
}

export default QA;