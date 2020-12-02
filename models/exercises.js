const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExercisesSchema = new Schema({
    name: String,
    type: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number,
})

module.exports = ExercisesSchema;