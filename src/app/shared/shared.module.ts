import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { TabsComponent } from './components/tabs/tabs.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
  declarations: [TabsComponent, UserMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    TabsComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
    UserMenuComponent,
  ],
})
export class SharedModule {}
