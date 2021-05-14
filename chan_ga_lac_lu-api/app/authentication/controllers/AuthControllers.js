const jwt = require('jsonwebtoken');
const MongoModels = require('../../mongo/db/models/index');
const UserController = require('../../mongo/controllers/UserController')
const AuthConfig = require("../config/AuthConfig")
// const JwtUtils = require('../../../utils/jwtUtils');

const User = MongoModels.UserModel;


// User register
const register = (request, response) => {
    if (UserController.isValidUser(request)) {
        const username = request.body.username || '';
        User.findOne({ username: username }, (error, user) => {
            // insert only if user not exist
            if (error) {
                response.status(401).send({
                    success: false,
                    message: error.message,
                });
            } else {
                if (!user) {
                    const userModel = UserController.userFromRequest(request);
                    userModel.save((error, newUser) => {
                        if (error) {
                            response.status(400).send({
                                success: false,
                                message: error.message,
                            });
                        } else {

                            response.status(201).send({
                                success: true,
                                user: newUser,
                            });
                        }
                    });
                } else {
                    response.status(400).send({
                        success: false,
                        message: "User is existed",
                    });
                }
            }
        });
    } else {
        return response.status(400).send({
            success: false,
            message: 'Bad request',
        });
    }
}

const login = async(request, response) => {
    const username = request.body.username || '';
    const password = request.body.password || '';
    if (username && password) {
        User.findOne({ username: username }, (error, user) => {
            // check if user exist
            if (error) {
                response.status(401).send({
                    success: false,
                    message: error.message,
                });
            } else {
                if (!user) {
                    response.status(400).send({
                        success: false,
                        message: "User is not existed",
                    });
                } else {
                    // check if password matches
                    user.comparePassword(password, (error, isMatch) => {
                        if (isMatch && !error) {
                            // if user is found and password is right create a token
                            // algorithm: process.env.JWT_TOKEN_HASH_ALGO
                            const token = jwt.sign({ userId: user._id }, AuthConfig.JWT_SECRET_OR_KEY, {
                                expiresIn: AuthConfig.JWT_TOKEN_EXPIRATION,
                            });

                            //console.log(user)

                            // return the information including token as JSON
                            response.status(200).send({
                                success: true,
                                user: user,
                                token: `${token}`,
                            });
                        } else {

                            response.status(400).send({
                                success: false,
                                message: "Wrong password",
                            });
                        }
                    });
                }
            }
        });
    } else {
        return response.status(400).send({
            success: false,
            message: "Bad request",
        });
    }
};

module.exports = {
    register,
    login
}