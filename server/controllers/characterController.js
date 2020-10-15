const db = require('../models/index.js');
const { findByIdAndDelete } = require('../models/userModel.js');

module.exports = {
  findAll: (req, res) => {
    db.Character.find({})
    .sort({ _id: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findByName: (req, res) => {
    db.Character.find({"name": req.params.name})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Character.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => console.log(err));
  },
  update: (req, res) => {
    db.Character.findByIdAndUpdate(req.params.id, req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
},
  delete: (req, res) => {
    db.Character.find({"name": req.params.name})
    .then(dbModel => findByIdAndDelete(dbModel._id))
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
}