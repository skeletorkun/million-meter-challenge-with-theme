const client = require('./oauth2');

const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.stravaCallback = functions.https.onRequest(((req, res) => {

  // // Check that we received a State Cookie.
  // if (!req.cookies.state) {
  //   res.status(400).send(
  //     'State cookie not set or expired. Maybe you took too long to authorize. Please try again.');
  //   // Check the State Cookie is equal to the state parameter.
  // } else if (req.cookies.state !== req.query.state) {
  //   res.status(400).send('State validation failed');
  // }

  // Exchange the auth code for an access token.
  client.code.getToken(window.location.href)
  .then(function (user) {
    // We have a strava access token and the user identity now.
    console.log('result data ' + JSON.stringify(user.data));
  })
  .catch(reason => console.error('Fascinating Exception ', reason));

}));

exports.redirect = functions.https.onRequest((req, res) => {

  // Generate a random state verification cookie.
  // const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
  // // Allow unsecure cookies on localhost.
  // const secureCookie = req.get('host').indexOf('localhost:') !== 0;
  // res.cookie('state', state.toString(), {maxAge: 3600000, secure: secureCookie, httpOnly: true});

  // Open the Auth flow in a popup.
  const uri = client.code.getUri();
  console.log('redirectUri ' + uri);
  res.redirect(uri);
});