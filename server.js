const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const routes = require('./routes');
const app = express();

mongoose.connect(
    keys.mongoURI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
);

console.log("The server is listening");

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT);