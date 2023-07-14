import { isPlatform } from '@ionic/angular';
import config from '../../capacitor.config';

export const domain = 'dev-rbn5nmuqqjc5xadm.jp.auth0.com';
export const clientId = 'XMZJUvUn5OvLkF0CvPwcrchtv4z4oprd';
const { appId } = config;

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:8100';
