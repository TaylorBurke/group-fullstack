const express = require('express');
const goalRoutes = express.Router();
const Goal = require("../models/goal");

goalRoutes.get('/', (req, res) => {
    Goal.find({user: req.user._id}, (err, goal) => {
        if (err) return res.status(500).send(err);
        return res.send(goal);
    });
});

goalRoutes.get('/:id', (req, res) => {
    Goal.findOne({_id: req.params.todoId, user: req.user._id}, (err, goal) => {
        if (err) return res.status(500).send(err);
        if (!goal) return res.status(404).send('Unable to locate goal')
        return res.send(goal);
    });
});

goalRoutes.post('/', (req, res) => {
    const newGoal = new Goal(req.body);
    //set user property of goal to req.user._id 
    newgoal.user = eq.user._id;
    newGoal.save(function(err, newGoal) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newGoal);
    });
});

goalRoutes.put('/:id', (req, res) => {
    Goal.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id},
        req.body, 
        {new: true},
        (err, updatedGoal) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedGoal);
        }
    );
});

goalRoutes.delete('/:id', (req, res) => {
    Goal.findOneAndRemove(
        {_id: req.params.todoId, user: req.user._id},
        (err, deleteGoal) => {
            if (err) return res.status(500).send(err);
            return res.send(deleteGoal);
    });
});

module.exports = goalRoutes;