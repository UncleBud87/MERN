const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



class UserController {

    registerUser = (req, res) => {
        User.find({ email: req.body.email })
            .then(usersWithEmail => {
                console.log('finding user response', usersWithEmail)
                if (usersWithEmail.length === 0) {
                    User.create(req.body)
                        .then(user => {
                            const userToken = jwt.sign({
                                id: user._id,
                                firstName: user.firstName
                            }, process.env.SECRET_KEY);

                            res
                                .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                                    httpOnly: true
                                })
                                .json({ msg: "success!", user: user });
                        })
                        .catch(err => res.json(err));
                } else {
                    res.json({ errors: { email: { message: 'Email is already in use' } } })
                }
            })
            .catch(err => console.log('err', err))
    }

    login = async (req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            return res.json({ error: "User not found." })
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            return res.json({error: "Password is incorrect!"});
        }

        const userToken = jwt.sign({
            id: user._id,
            firstName: user.firstName
        }, process.env.SECRET_KEY);

        res
            .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    }

    logout = (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }

    loggedInUser = (req, res) => {

        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true})

        User.findOne({_id: decodedJWT.payload.id})
        .then(foundUser=>{
            res.json({results: foundUser})
        })
        .catch(err=>{
            res.json(err)
        })
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