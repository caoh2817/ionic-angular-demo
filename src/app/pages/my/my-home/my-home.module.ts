import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MyHomePageRoutingModule } from './my-home-routing.module';
import { MyHomePage } from './my-home.page';

@NgModule({
  imports: [CommonModule, IonicModule, MyHomePageRoutingModule],
  declarations: [MyHomePage],
})
export class MyHomePageModule {}
