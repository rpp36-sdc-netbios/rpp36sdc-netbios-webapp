const express = require('express');
const morgan = require('morgan');
const {token} = require('./config.js');
const axios = require('axios');
const path = require('path');
var compression = require('compression');
var multer = require('multer');
var { uploadFile } = require('./s3');


const port = 1234;
const BASEURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp'

const app = express();

app.use(morgan('tiny'));
app.use(compression());
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

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

var upload = multer({storage: storage});

app.get('/p-:pId', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// app.post('/interactions', (req, res) => {
//   apiReq({
//     method: 'POST',
//     url: `${BASEURL}/interactions`,
//     headers: {
//       'User-Agent': 'request',
//       'Authorization': token,
//       'Content-Type': 'application/json'
//     },
//     data: JSON.stringify(req.body)
//   }, (err) => {
//     err ? res.sendStatus(500) : res.sendStatus(201);
//   });
// });

app.post('/image', upload.single('image'), (req, res) => {
  uploadFile(req.file)
  .then(apiRes => {
    console.log(apiRes);
    res.json({ url: apiRes.Location });
  }).catch(err => {
    console.log(err.message);
    res.sendStatus(500);
  });
});

app.get('/products/:pId',(req,res)=>{
  apiReq({
    url: `${BASEURL}/products/${req.params.pId}`,
    headers: options.headers
  }, (err, data) => {
    err ? res.sendStatus(500) : res.json(data);
  });
});

app.get('/questions', (req, res) => {
  // console.log('fetching questions')
  apiReq({
    url: `${BASEURL}/qa/questions`,
    headers: options.headers,
    params: req.query
  }, (err, data) => {
    console.log(data)
    err ? res.sendStatus(500) : res.json(data);
  });
});

app.post('/question', (req, res) => {
  // console.log('posting question')
  apiReq({
    method: 'POST',
    url: `${BASEURL}/qa/questions`,
    headers: {
      'User-Agent': 'request',
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(req.body)
  }, (err) => {
    err ? res.sendStatus(500) : res.sendStatus(204);
  });
});

app.post('/answer', (req, res) => {
  // console.log(req.body);

  console.log('posting answer')
  apiReq({
    method: 'POST',
    url: `${BASEURL}/qa/questions/${req.body.question_id}/answers`,
    headers: {
      'User-Agent': 'request',
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(req.body)
  }, (err) => {
    err ? res.sendStatus(500) : res.sendStatus(204);
  });
});

app.get('/answers/:qId', (req, res) => {
  console.log('fetching answers for a given question')
  apiReq({
    url: `${BASEURL}/qa/questions/${req.params.qId}/answers`,
    headers: options.headers,
    params: req.query
  }, (err, data) => {
    err ? res.sendStatus(500) : res.json(data);
  });
})

app.put('/qa/feedback', (req, res) => {
  console.log('feedback for questions and answers')
  apiReq({
    method: 'PUT',
    url: `${BASEURL}/qa/${req.body.qa}/${req.body.id}/${req.body.feedback}`,
    headers: options.headers,
  }, (err) => {
    err ? res.sendStatus(500) : res.sendStatus(204);
  })
});






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

