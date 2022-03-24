const Thing = require('../models/thing.model');



module.exports.findAllThings = (req, res) => {
    Thing.find()
        .then(allThings => {
            res.json({ results: allThings })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneThing = (req, res) => {
    Thing.findOne({ _id: req.params.id })
        .then(oneThing => {
            res.json({ results: oneThing })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createThing = (req, res) => {
    Thing.create(req.body)
        .then(newlyCreatedThing => {
            res.json({ results: newlyCreatedThing })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneThing = (req, res) => {
    Thing.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedThing => {
            res.json({ results: updatedThing })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteOneThing = (req, res) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(deleteThing => {
            res.json({ results: deleteThing })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}