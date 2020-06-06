var jsforce = require('jsforce');
const dotenv = require('dotenv');
dotenv.config();

const SalesForceConnection = new jsforce.Connection(
    {
        oauth2: {
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret
        }
    })

SalesForceConnection.login( process.env.SalesForceUserName,  process.env.SalesForcePassword)
    .then(() => {
        console.log('SalesForce Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the SalesForce:', err);
    });

module.exports = { SalesForceConnection };
