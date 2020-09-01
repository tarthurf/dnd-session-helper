const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Character name is required"
  },
  race: {
    type: String,
    trim: true,
    required: "Character race is required"
  },
  subrace: {
    type: String,
    trim: true,
  },
  class: {
    type: String,
    trim: true,
    required: "Character class is required"
  },
  level: {
    type: Number,
  },
  currentHP: {
    type: Number,
  },
  maxHP: {
    type: Number,
  },
  AC: {
    type: Number,
  },
  initiative: {
    type: Number,
  },
  perception: {
    type: Number,
  }
})

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character