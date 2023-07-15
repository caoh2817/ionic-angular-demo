import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { AuthGuard } from '@auth0/auth0-angular';

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
        path: 'toolbox',
        loadChildren: () =>
          import('./pages/toolbox/toolbox.module').then(
            (m) => m.ToolboxPageModule,
          ),
      },
      {
        path: 'my',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/my/my-home/my-home.module').then(
            (m) => m.MyHomePageModule,
          ),
      },
    ],
  },
  {
    path: 'edit-profile',
    loadChildren: () =>
      import('./pages/my/edit-profile/edit-profile.module').then(
        (m) => m.EditProfilePageModule,
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/my/settings/settings.module').then(
        (m) => m.SettingsPageModule,
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
