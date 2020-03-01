const functions = require('firebase-functions');
const api = require('./src/api')

exports.api = functions.https.onRequest(api);
