import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // mode = 'auto';
  // prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  //
  // constructor() {
  //   this.prefersDark.addEventListener('change', (e) => console.log(e));
  // }
  //
  // async setMode() {
  //   const storeMode = this.mode;
  //   await localStorage.setItem('keep', storeMode);
  //   document.body.classList.toggle('dark', true);
  // }
  //
  // async checkAwake() {
  //   const mode = await localStorage.getItem('keep');
  //   if (mode) {
  //     this.mode = mode;
  //   }
  // }
}
