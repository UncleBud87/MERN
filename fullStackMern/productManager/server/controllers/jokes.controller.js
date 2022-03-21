const Joke = require('../models/jokes.model');


module.exports.hello = (req,res)=>{
    res.json({msg:"hello world!"})
}

module.exports.findAllJokes = (req,res)=>{
    Joke.find()
        .then(allJokes =>{
            res.json({results: allJokes})
        })
        .catch(err =>res.json({
            message: 'Something went wrong', error: err}));
}

module.exports.findOneJoke = (req,res)=>{
    Joke.findOne({_id: req.params.id })
        .then(oneJoke =>{
            res.json({results: oneJoke})
        })
        .catch(err =>res.json({
            message: 'Something went wrong', error: err}));
}

module.exports.createJoke = (req,res)=>{
    Joke.create(req.body)
    .then(newlyCreatedJoke =>{
        res.json({results: newlyCreatedJoke})
    })
    .catch(err =>res.json({
            message: 'Something went wrong', error: err}));
}

module.exports.updateOneJoke = (req,res)=>{
    Joke.findOneAndUpdate({ _id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })
        .catchcatch(err =>res.json({
            message: 'Something went wrong', error: err}));
}

module.exports.deleteOneJoke = (req,res)=>{
    Joke.deleteOne({ _id: req.params.id})
        .then(deleteJoke =>{
            res.json({results: deleteJoke})
        })
        .catchcatch(err =>res.json({
            message: 'Something went wrong', error: err}));
}