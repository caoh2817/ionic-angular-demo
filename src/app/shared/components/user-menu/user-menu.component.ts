import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  constructor(
    public auth0: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {}

  navTo(url: string) {
    this.modalCtrl.dismiss();
    this.router.navigate([url]);
  }
}
