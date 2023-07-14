import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TabsComponent } from './components/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TabsComponent],
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
  ],
})
export class SharedModule {}
