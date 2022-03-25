const Pet = require('../models/petShelter.model');



module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => {
            res.json({ results: allPets })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOnePet = (req, res) => {
    Thing.findOne({ _id: req.params.id })
        .then(onePet => {
            res.json({ results: onePet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => {
            res.json({ results: newlyCreatedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOnePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => {
            res.json({ results: updatedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteOnePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deletePet => {
            res.json({ results: deletePet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}