const jwt = require('jsonwebtoken');
const userModel = require('../../../models/user.model');
const AuthConfig = require("../config/AuthConfig");
const bcrypt = require('bcrypt');
const JwtUtils = require("../../../utils/JwtUtils");
const UserController = require("./UserControllers")


// User register
const register = (req, res) => {
    // if (UserController.isValidUser(req)) {
    //     const username = req.body.username || '';
    //     userModel.findOneUsername({ username: username }, (error, user) => {
    //         // insert only if user not exist
    //         if (error) {
    //             res.status(401).send({
    //                 success: false,
    //                 message: error.message,
    //             });
    //         } else {
    //             if (!user) {
    //                 const userModel = UserController.userFromreq(req);
    //                 userModel.save((error, newUser) => {
    //                     if (error) {
    //                         res.status(401).send({
    //                             success: false,
    //                             message: error.message,
    //                         });
    //                     } else {

    //                         const verifyEmailToken = JwtUtils.createAuthToken(newUser._id)
    //                         mail.sendActivateUserEmail(newUser.email, newUser.fullName, verifyEmailToken)
    //                             .then(() => {
    //                                 res.status(200).send({
    //                                     success: true,
    //                                     user: newUser,
    //                                 });
    //                             })
    //                     }
    //                 });
    //             } else {
    //                 res.status(401).send({
    //                     success: false,
    //                     message: "User not exist",
    //                 });
    //             }
    //         }
    //     });
    // } else {
    //     return res.status(401).send({
    //         success: false,
    //         message: 'Bad req',
    //     });
    // }
}

const login = async(req, res) => {
    const username = req.body.username || '';
    const password = req.body.password || '';
    if (username && password) {

        const users = await userModel.findOneUsername(username);
        const user = users[0]
        if (user === null){
            res.status(401).send({
                success: false,
                message: "User not exist",
            });
        }
        else{
            bcrypt.compare(password, user.password, function(err, result) {
                if (result && !err) {
                    // if user is found and password is right create a token
                    // algorithm: process.env.JWT_TOKEN_HASH_ALGO
                    const token = jwt.sign({ user_id: user.user_id, fullName: user.fullName, role: user.role }, AuthConfig.JWT_SECRET_OR_KEY, {
                        expiresIn: AuthConfig.JWT_TOKEN_EXPIRATION,
                    });

                    
                    // return the information including token as JSON
                    res.status(200).send({
                        success: true,
                        user: user,
                        access_token: `${token}`,
                    });
                } else {
                    // let hash_
                    // bcrypt.genSalt(10, function(err, salt) {
                    //     bcrypt.hash('123', salt, function(err, hash) {
                    //         hash_=hash
                    //         console.log(hash)
                    //     });
                    // });

                    res.status(401).send({
                        success: false,
                        message: "Wrong password",
                    });
                }
            });
            
        }
        
        
    } else {
        return res.status(401).send({
            success: false,
            message: "Bad req",
        });
    }
};

module.exports = {
    register,
    login
}
