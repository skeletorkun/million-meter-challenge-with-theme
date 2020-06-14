import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import {client} from '../../oauth2';

export default function StravaLogin() {
  const [stuff, setStuff] = useState(true);
  const state = '123123123';
  // Generate a random state verification cookie.
  // const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
  // // Allow unsecure cookies on localhost.
  // const secureCookie = req.get('host').indexOf('localhost:') !== 0;
  // res.cookie('state', state.toString(), {maxAge: 3600000, secure: secureCookie, httpOnly: true});

  const redirectUri = client.code.getUri();
  console.log('redirectUri ' + redirectUri)

  return (
    <Redirect to={redirectUri}/>
  );
}
