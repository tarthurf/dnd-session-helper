const db = require('../models/index.js');

module.exports = {
  findAll: (req, res) => {
    db.Character.find({})
    .sort({ _id: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Character.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
}