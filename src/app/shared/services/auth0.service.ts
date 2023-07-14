import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { switchMap } from 'rxjs';
import { Browser } from '@capacitor/browser';

import { callbackUri } from '../../auth.config';

@Injectable({ providedIn: 'root' })
export class Auth0Service {
  user$ = this.auth0.isAuthenticated$.pipe(switchMap(() => this.auth0.user$));
  user: User | null | undefined;

  constructor(public auth0: AuthService) {
    this.user$.subscribe((user) => (this.user = user));
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

  getOwnerID() {
    if (!this.hasLoginInfo()) return null;
    return this.user?.sub?.replace('auth0|', '');
  }

  isGuest() {
    return !this.hasLoginInfo();
  }

  private hasLoginInfo() {
    return !!this.user;
  }
}
