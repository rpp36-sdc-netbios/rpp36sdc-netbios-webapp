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

app.get('/reviews',(req,res)=>{
  // var product_id = req.body.product_id;
  // var page = req.body.page;
  // var sort = req.body.sort;
  // var count = req.body.count;
   var product_id = 71697;
  var count = 5;
  var sort = 'newest';
  var page = 1;

  var url =`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${product_id}&sort=${sort}&count=${count}&page=${page}`
  // var url =`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp36/reviews?product_id=1&sort=newest&count=5`
  console.log(url)

  axios.get(url,options)
  .then(data=>{
    console.log('API data in get reviews '+ data.data.results);
    res.send(data.data)
  })
  .catch(err=> res.status(500).send('API err inside data get reviews'))

})
app.get('/reviews/meta/:product_id',(req,res)=>{
  // var product_id = req.body.product_id;
  // var page = req.body.page;
  // var sort = req.body.sort;
  // var count = req.body.count;
   var product_id = 71697;

  var url =`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${product_id}`

  axios.get(url,options)
  .then(data=>{
    console.log('API data in get meta reviews '+ data.data.results);
    res.send(data.data)
  })
  .catch(err=> res.status(500).send('API err inside data get meta reviews'))
})

app.get('/products:product_id',(req,res)=>{
  var id = req.params.product_id;
  var url =`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`;

  axios.get(url,{headers:options.headers})
  .then(apiRes=>{
    console.log(apiRes.data);
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

app.get('/products',(req,res)=>{
  // var product_id = req.body.product_id;
  // var page = req.body.page;
  // var sort = req.body.sort;
  // var count = req.body.count;


  var url =`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products`
  console.log(url)

  axios.get(url,options)
  .then(data=>{
    console.log('API data in get meta reviews '+ data.data.results);
    res.send(data.data)
  })
  .catch(err=> res.status(500).send('API err inside data get reviews'))

})
