const express = require("express");
const AuthController = require("../controllers/AuthControllers");
const UserController = require("../../mongo/controllers/UserController")
const passport = require("passport")

const {Router} = express;

const AuthRouter = Router();

AuthRouter.post('/register', (req, res) => {
  AuthController.register(req, res);
});

AuthRouter.post('/login', (req, res) => {
  AuthController.login(req, res);
});

/**
 * Login with Google
 */
AuthRouter.get(
  '/auth/google',
  passport.authenticate('GoogleAuth', {
    scope:
      ['email', 'profile'],
  }),
);
AuthRouter.get(
  '/auth/google/callback',
  passport.authenticate('GoogleAuth', {
    session: false,
    failureRedirect: '/',
  }),
  UserController.authExternal,
);

/**
 * Login with Facebook
 */
AuthRouter.get('/auth/facebook', passport.authenticate('FacebookAuth', {scope: ['email, user_gender, user_link']}));

AuthRouter.get(
  '/auth/facebook/callback',
  passport.authenticate('FacebookAuth', {
    session: false,
    failureRedirect: '/',
  }),
  UserController.authExternal,
);



module.exports = AuthRouter;

