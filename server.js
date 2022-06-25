const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = 3000;

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, 'client/dist')));
app.use(express.json());

app.listen(port, () => {
  console.log('Listening on port', port);
});



