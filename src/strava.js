import {stravaConfig} from './config/stravaConfig'
import strava from 'strava-v3';

try {
    strava.config(stravaConfig);
    console.log("Strava initialized");
} catch (err) {
    console.log("Error Initializing Strava");
}

export default strava