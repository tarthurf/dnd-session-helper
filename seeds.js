const mongoose = require("mongoose");
const db = require("./models/index.js");

require('./database');

let userArr = [];
let characterArr = [];

const userSeed=[
  {
    username: "test1",
    gm: false
  },
  {
    username: "test2",
    gm: true
  },
]

db.user.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    return db.User.find({})
  })