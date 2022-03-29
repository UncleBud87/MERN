const User = require('../models/user.model');



class UserController {

    findAllUsers = (req, res) => {
        User.find()
            .then(allUsers => {
                res.json({ results: allUsers })
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }))
    }

    findOneUser = (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(oneUser => {
                res.json({ results: oneUser })
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }))
    }

    registerUser = (req, res) => {
        User.create(req.body)
            .then(user => {
                res.json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    }

    updateOneUser = (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedUser => {
                res.json({ results: updatedUser })
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }))
    }

    deleteOneUser = (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(deleteUser => {
                res.json({ results: deleteUser })
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }))
    }

}

module.exports = new UserController();

