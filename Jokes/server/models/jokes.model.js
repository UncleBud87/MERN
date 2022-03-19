const mongoose = require('mongoose');

const JokeSchema =new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Must have a setup"],
        minlength: [2, "must include a setup"]
    },
    punchline: {
        type: String,
        required: [true, "must have a punchline"],
        minlength: [2, "must include a setup"]
    },
    },
    {timestamps: true}
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;