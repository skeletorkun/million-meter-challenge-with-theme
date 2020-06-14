import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import {client} from '../../oauth2';


function StravaLoginCallback(){
  let [stuff, setStuff] = useState(true);
  return (<div> {stuff} </div>)
}

export default StravaLoginCallback;