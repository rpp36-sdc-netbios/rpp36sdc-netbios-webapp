import React, { useEffect, useState } from 'react';

var useFetch = (url) => {
  var [ data, setData ] = useState(null);
  var [ pending, setPending ] = useState(true);
  var [ error, setError ] = useState(null);

  useEffect(() => {
    setPending(true);
    setData(null);
    fetch(url)
      .then(res => {
      if (!res.ok) {
        throw 'Error fetching data'
      }
      return res.json();
    }).then(data => {
      setData(data);
      setPending(false);
    }).catch(err => {
      setError(err);
      setPending(false);
    });

  }, [url]);

  return [
    data,
    pending,
    error
  ];
}

export default useFetch;