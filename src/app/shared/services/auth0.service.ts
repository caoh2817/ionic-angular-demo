import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';

import { callbackUri } from '../../auth.config';

@Injectable({ providedIn: 'root' })
export class Auth0Service {
  user = {} as User;
  constructor(public auth0: AuthService) {
    this.auth0.user$.subscribe(async (user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  login() {
    this.auth0
      .loginWithRedirect({
        async openUrl(url: string) {
          await Browser.open({ url, windowName: '_self' });
        },
      })
      .subscribe();
  }

  logout() {
    return this.auth0
      .logout({
        logoutParams: {
          returnTo: callbackUri,
        },
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        },
      })
      .subscribe();
  }

  getOwnerId() {
    return this.user.sub?.split('|')[1];
  }

  getUser() {
    return this.auth0.user$;
  }
}
