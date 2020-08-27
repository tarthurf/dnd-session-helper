const db = require('../models/index.js');

module.exports = {
  findAll: (req, res) => {
    db.User.find({})
    .sort({ _id: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findByName: (req, res) => {
    db.User.find({"username": req.params.username})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.User.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
}