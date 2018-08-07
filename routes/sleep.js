const express = require('express');
const sleepRoutes = express.Router();
const Sleep = require("../models/sleep");

sleepRoutes.get('/', (req, res) => {
    Sleep.find(req.query, (err, sleep) => {
        if (err) return res.status(500).send(err);
        return res.send(sleep);
    });
});

sleepRoutes.get("/:id", (req, res) => {
    Sleep.findById(req.params.id, (err, sleep) => {
        if (err) return res.status(500).send(err);
        return res.send(sleep);
    });
});

sleepRoutes.post('/', (req, res) => {
    const newTransaction = new Sleep(req.body);
    newTransaction.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newTransaction);
    });
});

sleepRoutes.put('/:id', (req, res) => {
    Sleep.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTransaction) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedTransaction);
    });
});

sleepRoutes.delete('/:id', (req, res) => {
    Sleep.findByIdAndRemove(req.params.id, (err, deleteTransaction) => {
        if (err) return res.status(500).send(err);
        return res.send(deleteTransaction);
    });
});

module.exports = sleepRoutes;