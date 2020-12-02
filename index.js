const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/workoutsRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);