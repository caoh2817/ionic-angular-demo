import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './shared/components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'my',
        loadChildren: () =>
          import('./pages/my/my-home/my-home.module').then(
            (m) => m.MyHomePageModule,
          ),
      },
    ],
  },
  {
    path: 'my-home',
    loadChildren: () =>
      import('./pages/my/my-home/my-home.module').then(
        (m) => m.MyHomePageModule,
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
