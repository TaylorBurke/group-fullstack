const express = require('express');

const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const morgan = require('morgan');
const expressJwt = require('express-jwt');

const goalRouter = require('./routes/goals');

// variables
const PORT = process.env.PORT || 3030;

app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/goal-tracker",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.use('/auth', require('./routes/auth'));
app.use('/api', expressJwt({secret: process.env.SECRET}));
app.use('/api/goals', require('./routes/goals'));
app.use("/api/profile", require("./routes/profile"));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));



