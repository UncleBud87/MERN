const Author = require('../models/authors.model');



module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => {
            res.json({ results: allAuthors })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => {
            res.json({ results: oneAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(createAuthor => {
            res.json({ results: createAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ results: updatedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteAuthor => {
            res.json({ results: deleteAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}