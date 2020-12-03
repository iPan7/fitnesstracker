const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require("path");
const app = express();

mongoose.connect(
    keys.mongoURI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
);

console.log("The server is listening");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public","index.html"));
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT);