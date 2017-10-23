const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const bcrypt = require('bcrypt-as-promised');

const ejs = require('ejs');
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const queries = require('./db/queries');
const knex = require('./db/knex.js');

app.get('/recipes', function (req, res, next) {
  queries.recipes.getAll()
    .then(data => {
      console.log(data);
      res.json(data);
    });
});

app.post('/recipes', function (req, res) {
  queries.recipes.create(req.body)
    .then(data => {
      res.send(data[0]);
    });
});

app.listen(port, () => {
  console.log('connecting to port', port);
});
