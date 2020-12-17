const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const routes = require('./routes');
const app = express();
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Connection to DB works!'))
    .catch(e => console.log(e));
  
  mongoose.set('debug', true);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT);