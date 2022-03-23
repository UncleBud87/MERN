const Product = require('../models/products.model');


module.exports.hello = (req, res) => {
    res.json({ msg: "hello world!" })
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json({ results: allProducts })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json({ results: oneProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ results: newlyCreatedProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ results: updatedProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteProduct => {
            res.json({ results: deleteProduct })
        })
        .catchcatch(err => res.json({ message: 'Something went wrong', error: err }));
}