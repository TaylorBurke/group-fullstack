const express = require('express');

const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const morgan = require('morgan');
const expressJwt = require('express-jwt');

const goalRoutes = require('./routes/goals');

// variables
const PORT = process.env.PORT || 3030;

app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/goals", { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.use('/api', expressJwt({secret: process.env.SECRET}));
app.use('/api/goals', require('./routes/goals'));
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));



