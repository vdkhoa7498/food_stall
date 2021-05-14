const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const { Schema } = mongoose;

const userSchema = Schema({
    fullName: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true, // unique email
        trim: true,
        index: true,
    },
    username: {
        type: String,
    },
    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    role:{
        type: Number,
    }
}, {
    collection: 'user'
});

// pre saving user
userSchema.pre('save', function(next) {
    const user = this;

    if (!user.password) next();

    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(error, salt) {
            // handle error
            if (error) return next(error);

            // hash the password using our new salt
            bcrypt.hash(user.password, salt, function(error, hash) {
                // handle error
                if (error) return next(error);

                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

// post saving user
userSchema.post('save', function(user, next) {
    next();
});

// compare password
userSchema.methods.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('user', userSchema)