const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const flightSchema = new Schema({
  airline: {type: String, enum: ['American', 'Southwest', 'United']},
  flightNo: {type: Number, required: true},
  departs: {type: Date},
  // Blueprint goes in here! (Exercises Step 6)
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;