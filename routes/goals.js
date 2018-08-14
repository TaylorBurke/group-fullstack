const express = require('express');
const goalRouter = express.Router();
const Goal = require("../models/goal");

goalRouter.get('/', (req, res) => {
    Goal.find({user: req.user._id}, (err, goals) => {
        if (err) return res.status(500).send(err);
        return res.send(goals);
    });
});

goalRouter.get('/:goalId', (req, res) => {
    Goal.findOne({_id: req.params.goalId, user: req.user._id}, (err, goal) => {
        if (err) return res.status(500).send(err);
        if (!goal) return res.status(404).send('Unable to locate goal')
        return res.send(goal);
    });
});

goalRouter.post('/', (req, res) => {
    const newGoal = new Goal(req.body);
    //set user property of goal to req.user._id 
    newGoal.user = req.user._id;
    newGoal.save(function(err, newGoal) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newGoal);
    });
});

goalRouter.put('/:goalId', (req, res) => {
    Goal.findOneAndUpdate(
        {_id: req.params.goalId, user: req.user._id},
        req.body, 
        {new: true},
        (err, updatedGoal) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedGoal);
        }
    );
});

goalRouter.delete('/:goalId', (req, res) => {
    Goal.findOneAndRemove({_id: req.params.goalId, user: req.user._id}, (err, deleteGoal) => {
        if (err) return res.status(500).send(err);
        return res.send(deleteGoal);
    });
});

module.exports = goalRouter;