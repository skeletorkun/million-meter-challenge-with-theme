import { credentials, stravaConfig } from './config/stravaConfig'
import ClientOAuth2  from 'client-oauth2';


export const client = new ClientOAuth2(stravaConfig);