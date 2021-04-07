const httpStatusCodes = require('http-status-codes')
const JwtUtils = require("../../../utils/JwtUtils");
const bcrypt = require("bcrypt")
const userModel = require("../../../models/user.model")

require('dotenv').config();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'

const isValidUser = (request) => {
    if (request) {
        const username = request.body.username || '';
        const password = request.body.password || '';
        const fullName = request.body.fullName || '';

        if (email && username && password && fullName) {
            return true;
        }
    }
    return false;
}

const userFromRequest = (request) => {
    if (isValidUser(request)) {
        return new User(request.body);
    }
    return null;
};

// Handler for OAuth Google, Facebook
const authExternal = async(req, res, next) => {
    console.log("Login OAuth")
    const { user } = req;
    const { id } = user;
    const type = user.provider.toUpperCase();
    let userModel_;

    const userInfo = await authenticateExternal({ id, type });
    if (!userInfo) {
        userModel_ = await createUserExternal(user, type);
    } 
    // else {
    //     userModel_ = await User.findOne({ email: user.email }).exec();
    // }
    const token = JwtUtils.createAuthToken(userModel_);
    const userId = userModel_._id.toString();

    res.redirect(`${FRONTEND_URL}/saveToken/${token}/${userId}`);
};

const authenticateExternal = async({ id, type }) => {
    let instance;
    switch (type) {
        // case 'GOOGLE':
        //     instance = await User.findOne({ googleId: id }).exec();
        //     if (instance) {
        //         return instance;
        //     }
        //     break;
        case 'FACEBOOK':
            instance = await userModel.findOne({ facebookId: id }).exec();
            if (instance) {
                return instance;
            }
            break;
    }
    return null;
};

const createUserExternal = async(userInfo, type) => {
    const { id, displayName, email } = userInfo;
    let user;
    let userModel_;
    switch (type) {
        case 'FACEBOOK':
            userModel_ = new User({
                fullName: displayName,
                // email: email,
                facebookId: id
            });
            user = await userModel_.save();
            break;
        // case 'GOOGLE':
        //     userModel = new User({
        //         fullName: displayName,
        //         email: email,
        //         googleId: id
        //     });
        //     user = await userModel.save();
        //     break;
    }
    return user;
};

const getUserById = async(req, res) => {

    const user = await User.findOne({
        _id: req.params.userid
    }).exec();
    res.send(user);
}

// check Username (Forget-pass)
const checkUserName = async(req, res) => {
    
}

const checkAccessToken = async(req, res) => {
    const { token } = req.body;
    try {
        const decoded = await JwtUtils.decodeAuthToken(token)
        const user_id = decoded.user_id
        const user = await userModel.single(user_id)
        if (user) {
            res.send({
                success: true,
                user: user
            })
        } else {
            res.send({
                success: false,
                user: null
            })
        }
    } catch (err) {
        return res.status(httpStatusCodes.BAD_REQUEST).json({
            message: 'Hệ thống gặp lỗi'
        })
    }
}
const changePassword = async(req, res) => {

    bcrypt.genSalt(10, async(error, salt) => {
        // handle error
        if (error) res.send(error);

        // hash the password using our new salt
        bcrypt.hash(req.body.password, salt, async(error, hash) => {
            // handle error
            if (error) res.send(error);
            // override the cleartext password with the hashed one
            const result = await User.updateOne(req.body.user_id, hash);
            res.send({
                success: true
            })
        });
    });

}


module.exports = {
    isValidUser,
    userFromRequest,
    authExternal,
    getUserById,
    checkUserName,
    checkAccessToken,
    changePassword
}
