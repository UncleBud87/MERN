const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



class UserController {

    registerUser = (req, res) => {
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY);

                res
                    .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    }

    login = async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user === null) {
            return res.json({msg: "User not found."})
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if (!correctPassword) {
            return res.sendStatus(400);
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    }

    logout = (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }

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




    // login = (req, res) => {
    //     User.findOne({ email: req.body.email })
    //         .then(user => {
    //             if (user === null) {
    //                 res.json({ msg: "invalid login attempt-user not found" })
    //             } else {
    //                 bcrypt.compare(req.body.password, user.password)
    //                     .then(passwordIsValid => {
    //                         if (passwordIsValid) {
    //                             res.cookie("usertoken", jwt.sign({ _id: user._id }, process.env.SECRET_KEY), { httpOnly: true })
    //                                 .json({ msg: "success!" });
    //                         } else {
    //                             res.json({ msg: "invalid login attempt- password incorrect" })
    //                         }
    //                     })
    //                     .catch(err => res.json({ msg: "invalid login attempt", err }))
    //             }
    //         })
    //         .catch(err => res.json(err))
    // }