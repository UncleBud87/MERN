const mongoose = require('mongoose');

const ThingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must have a title"],
        minlength: [2, "Title must be longer than 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "Item must have a price"],
        minlength: [1, "Item must have a price"]
    },
    description: {
        type: String,
        required: [true, "Must have a description"],
        minlength: [10, "Description must be longer than 10 characters"]
    },
},
    { timestamps: true }
);

const Thing = mongoose.model('Thing', ThingSchema);

module.exports = Thing;