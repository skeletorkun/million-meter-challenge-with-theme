const stravaConfig = require('../src/config/stravaConfig').stravaConfig;
const ClientOAuth2 = require('client-oauth2');


export const client = new ClientOAuth2(stravaConfig);