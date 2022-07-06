const express = require('express');
const morgan = require('morgan');
const {token} = require('./config.js');
var bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const port = 3000;

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, 'client/dist')));
app.use(express.json());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Listening on port', port);
});

var options ={
  headers: {
    'User-Agent': 'request',
    'Authorization': token
  }
}

app.get('/products:product_id',(req,res)=>{
  var id = req.params.product_id;
  var url =`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`;

  axios.get(url,{headers:options.headers})
  .then(apiRes=>{
    res.json(apiRes.data)
  })
  .catch(err=> res.status(500).send('Error when retrieving data'))

});

app.get('/qa:product_id', (req, res) => {
  var url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${req.params.product_id}`;
  axios.get(url, {headers: options.headers})
  .then(apiRes => {
    res.json(apiRes.data);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

app.get('/related:product_id', (req, res) => {
  var url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/related`;
  axios.get(url, {headers: options.headers})
  .then(apiRes => {
    res.json(apiRes.data);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

