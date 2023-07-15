import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import {
  AnimationController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { UserMenuComponent } from '../../../shared/components/user-menu/user-menu.component';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.page.html',
  styleUrls: ['./my-home.page.scss'],
})
export class MyHomePage implements OnInit {
  enterAnimation: any;
  leaveAnimation: any;

  constructor(
    private router: Router,
    public auth0: AuthService,
    private animationCtrl: AnimationController,
    private modalCtrl: ModalController,
    public navCtrl: NavController,
  ) {}

  ngOnInit(): void {
    this.enterAnimation = (baseEl: HTMLElement) => {
      const root: ShadowRoot = baseEl.shadowRoot!;

      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector('.modal-wrapper')!)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(300)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    this.leaveAnimation = (baseEl: HTMLElement) => {
      const root: ShadowRoot = baseEl.shadowRoot!;

      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector('ion-backdrop')!)
        .fromTo('opacity', 'var(--backdrop-opacity)', '0.01');

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector('.modal-wrapper')!)
        .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(300)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };
  }

  goToOrders() {
    //TODO 导航到订单管理页面
  }

  goToFavorites() {
    //TODO 导航到收藏夹页面
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  openMenu() {
    this.modalCtrl
      .create({
        component: UserMenuComponent,
        enterAnimation: this.enterAnimation,
        leaveAnimation: this.leaveAnimation,
        cssClass: 'user-menu-modal',
        canDismiss: true,
        backdropDismiss: true,
        showBackdrop: true,
      })
      .then((modal) => {
        const element = modal.shadowRoot!.querySelector('.modal-shadow');
        console.log(element);
        element!.setAttribute('style', 'z-index: -99');
        modal.present();
      });
  }
}
