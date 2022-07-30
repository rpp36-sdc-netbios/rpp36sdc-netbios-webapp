import React, { useEffect, useState } from 'react';

var QSearch = ({ setSearch }) => {

  var [ page, setPage ] = useState(1);
  var [ count, setCount ] = useState(2);


  // useEffect(() => {
  //     fetch(`questions?product_id=${productId}&page=${page}&count=${count}&search=${search}`)
  //     .then(res => {
  //       return res.json();
  //     }).then(data => {
  //       setQuestions(data.results);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  // }, [ search ]);

  var qHandler = (e) => {
    if (e.target.value.length > 2) {
      setSearch(e.target.value);
    } else {
      setSearch('');
    }
  };

  return (
    <div className='qa-search-container'>
      <input data-testid='qa-search' className='qa-search' type='text'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' onChange={qHandler} />
      <i className="fa fa-search pointer"></i>
    </div>
  );
};

export default QSearch;