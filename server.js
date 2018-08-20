const express = require('express');
const path = require("path")
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const morgan = require('morgan');
const expressJwt = require('express-jwt');

// variables
const PORT = process.env.PORT || 3030;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/goal-tracker",
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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));



