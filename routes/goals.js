const express = require('express');
const goalRoutes = express.Router();
const Goal = require("../models/goal");

goalRoutes.get('/', (req, res) => {
    Goal.find(req.query, (err, goal) => {
        if (err) return res.status(500).send(err);
        return res.send(goal);
    });
});

goalRoutes.get("/:id", (req, res) => {
    Goal.findById(req.params.id, (err, goal) => {
        if (err) return res.status(500).send(err);
        return res.send(goal);
    });
});

goalRoutes.post('/', (req, res) => {
    const newGoal = new Goal(req.body);
    newGoal.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newGoal);
    });
});

goalRoutes.put('/:id', (req, res) => {
    Goal.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGoal) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedGoal);
    });
});

goalRoutes.delete('/:id', (req, res) => {
    Goal.findByIdAndRemove(req.params.id, (err, deleteGoal) => {
        if (err) return res.status(500).send(err);
        return res.send(deleteGoal);
    });
});

module.exports = goalRoutes;