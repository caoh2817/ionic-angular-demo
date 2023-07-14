import { Component, NgZone, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@auth0/auth0-angular';
import { App } from '@capacitor/app';
import { mergeMap } from 'rxjs';
import { Browser } from '@capacitor/browser';
import { callbackUri } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    public auth: AuthService,
    private ngZone: NgZone,
  ) {
    this.translate.setDefaultLang('zh');
    this.translate.use('zh');
  }

  ngOnInit() {
    App.addListener('appUrlOpen', ({ url }) => {
      // Must run inside an NgZone for Angular to pick up the changes
      // https://capacitorjs.com/docs/guides/angular
      this.ngZone.run(() => {
        if (url?.startsWith(callbackUri)) {
          if (
            url.includes('state=') &&
            (url.includes('error=') || url.includes('code='))
          ) {
            this.auth
              .handleRedirectCallback(url)
              .pipe(mergeMap(() => Browser.close()))
              .subscribe();
          } else {
            Browser.close();
          }
        }
      });
    });
  }
}
