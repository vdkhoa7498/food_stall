const API_URL = 'http://localhost:8000';

module.exports = {
  API_URL : API_URL,
  GOOGLE_CLIENT_ID : '929846351548-er9sfn0pl7f0ojc4414113ss97ru50rs.apps.googleusercontent.com',
  GOOGLE_CLIENT_SECRET : 'pHUrGABftKJWSUZDsujLhEPE',
  GOOGLE_AUTH_CALLBACK_URL : `${API_URL}/user/auth/google/callback`,
  FACEBOOK_CLIENT_ID : '223476042494142',
  FACEBOOK_CLIENT_SECRET : '581e7623ce5b2b91a9787f3eb1a442cf',
  FACEBOOK_AUTH_CALLBACK_URL : `${API_URL}/user/auth/facebook/callback`
}
