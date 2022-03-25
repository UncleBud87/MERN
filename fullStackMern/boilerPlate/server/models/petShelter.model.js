const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Must have a type"],
        minlength: [3, "Type must be 3 characters or more"]
    },
    description: {
        type: String,
        required: [true, "Item must have a Description"],
        minlength: [3, "Item must have a price"]
    },
    skills1: {
        type: String,
        required: [true, "Must include a skill"],
        minlength: [3, "Skill must be longer than 3 characters. Write none if there is no skill"]
    },
    skills1: {
        type: String,
        required: [true, "Must include a skill"],
        minlength: [3, "Skill must be longer than 3 characters. Write none if there is no skill"]
    },
    skills1: {
        type: String,
        required: [true, "Must include a skill"],
        minlength: [3, "Skill must be longer than 3 characters. Write none if there is no skill"]
    },
},
    { timestamps: true }
);

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;