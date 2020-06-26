import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { client } from '../../../functions/oauth2';
// ESM
import {parse, stringify} from 'flatted';
import { useFirebase } from 'react-redux-firebase';

function StravaLoginCallback() {
  const firebase = useFirebase();
  const [searchParams, setSearchParams] = useState({});
  let location = useLocation();
  useEffect(
    () => {
      const searchParams = new URLSearchParams(location.search);
      setSearchParams(searchParams);
      let code = searchParams.get('code');
      console.log('location ' + window.location.href);
      console.log('scope ' + searchParams.get('scope'));
      console.log('code ' + code);
      console.log('state ' + searchParams.get('state'));

      // Exchange the auth code for an access token.
      client.code.getToken(window.location.href)
      .then(function (user) {
        // We have a strava access token and the user identity now.
        console.log('result data ' + JSON.stringify(user.data));

      })
      .catch(reason => console.error('Fascinating Exception ', reason));

    },
    [location]
  );

  return (<div> {JSON.stringify(searchParams)} </div>)
}

function createFirebaseToken(stravaId, firebase) {
  // The uid we'll assign to the user.
  const uid = `strava:${stravaId}`;

  // Create the custom token.
  return firebase.auth().createCustomToken(uid);
}

export default StravaLoginCallback;