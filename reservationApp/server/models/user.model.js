const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({

        firstName: {
            type: String,
            required: [true, "First Name is required"],
        },
        lastName: {
            type: String,
            required: [true, "Last Name is required"],
        },
        email: {
            type: String,
            required: [true, "Item must have a Description"],
            validate: {
                validator: val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
                message: 'Please enter a valid email',
            }
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be atleast 8 characters long"]
        },
    },
    { timestamps: true }
);

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
    });

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
    });


module.exports = mongoose.model('User', UserSchema);
