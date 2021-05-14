const jwt = require("jsonwebtoken");
const JWTConfig = require("../config/config");

const createAuthToken = (user_id, fullName, role) => {
  return `${jwt.sign({user_id: user_id, fullName: fullName, role: role}, JWTConfig.JWT_SECRET_OR_KEY, {
    expiresIn: JWTConfig.JWT_TOKEN_EXPIRATION,
  })}`
}

const decodeAuthToken = (token) => {
  const decoded = jwt.verify(token, JWTConfig.JWT_SECRET_OR_KEY)
  return decoded
}

module.exports = {
  createAuthToken,
  decodeAuthToken
}
