const MongoModels = require("../app/mongo/db/models/index");
const passportJWT = require("passport-jwt");
const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require("passport-facebook");
const passport = require('passport');

const {
  FACEBOOK_AUTH_CALLBACK_URL,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  GOOGLE_AUTH_CALLBACK_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = require("./config");

// passport & jwt config
// const {Strategy: JWTStrategy, ExtractJwt: ExtractJWT} = passportJWT;

// import User model
// const User = MongoModels.UserModel;


const googleStrategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_AUTH_CALLBACK_URL,
  },
  (accessToken, refreshToken, profile, done) => {
    const {id, provider, displayName} = profile;
    const email = profile.emails[0].value;
    const externalUserInfo = {
      id,
      provider,
      displayName,
      email,
    };
    return done(null, externalUserInfo);
  },
);

const facebookStrategy = new FacebookStrategy(
  {
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: FACEBOOK_AUTH_CALLBACK_URL,
    profileFields: ['id', 'email', 'picture.type(large)', 'gender', 'link', 'name', 'displayName'],
  },
  (accessToken, refreshToken, profile, done) => {
    const {id, provider, displayName} = profile;
    const email = profile.emails.length > 0 ? profile.emails[0].value : null;
    const externalUserInfo = {
      id,
      provider,
      displayName,
      email,
    };

    return done(null, externalUserInfo);
  },
);

// token strategy
// passport.use(passportJWTStrategy);


// Passport for Facebook Oauth 2
passport.use('FacebookAuth', facebookStrategy);

