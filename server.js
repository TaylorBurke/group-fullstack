const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sleepRoutes = require('./routes/sleep')

// variables
const PORT = 3030;
const app = express();

app.use(bodyParser.json());
app.use("/sleep", require('./routes/sleep'));

mongoose.connect("mongodb://localhost:27017/sleep", {useNewUrlParser:true})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));



