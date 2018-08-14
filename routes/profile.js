const express = require("express");
const expressJwt = require("express-jwt");
const User = require("../models/user.js");

const profileRoute = express.Router();

const auth = expressJwt({ secret: process.env.SECRET });
profileRoute.use(auth);

profileRoute.get("/", (req, res) => {
    User.findById(req.user._id, (err, user) => {
        if (err) return res.status(500).send({ success: false, err })
        if (user === null) return res.status(400).send({ success: false, err: "User not found!" })
        return res.status(200).send({ success: true, user: user.withoutPassword() })
    })
});


module.exports = profileRoute;