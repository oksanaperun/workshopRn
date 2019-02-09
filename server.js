var express = require('express');
const fetch = require('node-fetch');
var app = express();

const apikey = '2f3933e4';
const endpoint = `http://www.omdbapi.com/?apikey=${apikey}&s=*apple*&p=1`;

app.get('/', async function (req, res) {
  const data = await fetch(endpoint)
    .then(data => data.json());

  res.send(data);
});

app.listen(3000, function () {
  console.log('running');
});
