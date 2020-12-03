const mongoose = require('mongoose');
const { Schema } = mongoose;
const ExercisesSchema = require('./exercises');

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [ExercisesSchema]
})

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;