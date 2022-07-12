const express = require('express');
const morgan = require('morgan');
const {token} = require('./config.js');
const axios = require('axios');
const path = require('path');

const port = 3000;
const BASEURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp'

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, 'client/dist')));
app.use(express.json());

app.listen(port, () => {
  console.log('Listening on port', port);
});

var options ={
  headers: {
    'User-Agent': 'request',
    'Authorization': token
  }
}

app.get('/products/:pId',(req,res)=>{
  apiReq({
    url: `${BASEURL}/products/${req.params.pId}`,
    headers: options.headers
  }, (err, data) => {
    err ? res.sendStatus(500) : res.json(data);
  });
});

app.get('/questions', (req, res) => {
  apiReq({
    url: `${BASEURL}/qa/questions`,
    headers: options.headers,
    params: req.query
  }, (err, data) => {
    err ? res.sendStatus(500) : res.json(data);
  });
});

app.get('/answers/:qId', (req, res) => {
  apiReq({
    url: `${BASEURL}/qa/questions/${req.params.qId}/answers`,
    headers: options.headers,
    params: req.query
  }, (err, data) => {
    err ? res.sendStatus(500) : res.json(data);
  });
})

app.put('/qa/feedback', (req, res) => {
  apiReq({
    method: 'PUT',
    url: `${BASEURL}/qa/${req.body.qa}/${req.body.id}/${req.body.feedback}`,
    headers: options.headers,
  }, (err) => {
    err ? res.sendStatus(500) : res.sendStatus(204);
  })
});

app.get('/related/:product_id', (req, res) => {
  apiReq({
    url: `${BASEURL}/products/${req.params.product_id}/related`,
    headers: options.headers,
  }, (err, data) => {
    err ? res.sendStatus(500) : res.json(data);
  });
});

app.get('/styles:product_id', (req, res) => {
  var id = req.params.product_id;
  var url =`${BASEURL}/products/${id}/styles`;
  axios.get(url, {headers: options.headers})
  .then(apiRes => {
    res.json(apiRes.data);
  }).catch(err => {
    console.log(err.message);
    res.sendStatus(500);
  });
})

app.get('/reviews',(req,res)=>{
  // var product_id = req.body.product_id;
  // var page = req.body.page;
  // var sort = req.body.sort;
  // var count = req.body.count;
  var {product_id, sort, count,page} = req.query;


  var url =`${BASEURL}/reviews?product_id=${product_id}&sort=${sort}&count=${count}&page=${page}`
  // var url =`${BASEURL}/reviews?product_id=1&sort=newest&count=5`

  axios.get(url,options)
  .then(data=>{
    res.send(data.data)
  })
  .catch(err=> res.status(500).send('API err inside data get reviews'))

})
app.get('/reviews/meta/:product_id',(req,res)=>{
  // var product_id = req.body.product_id;
  // var page = req.body.page;
  // var sort = req.body.sort;
  // var count = req.body.count;
   var product_id = req.params.product_id;

  var url =`${BASEURL}/reviews/meta?product_id=${product_id}`

  axios.get(url,options)
  .then(data=>{
    res.send(data.data)
  })
  .catch(err=> res.status(500).send('API err inside data get meta reviews'))
})

// for fetching from api
var apiReq = async (config, cb) => {
  try {
    var res = await axios(config);
    cb(null, res.data);
  } catch (err) {
    console.log(err.message);
    cb(err.message, null);
  }
};


