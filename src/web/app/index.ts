import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import HomeModule from './home';

export const ROUTER_CONFIG = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'about', loadChildren: () => System.import('./+about') },
];

@NgModule({
  providers: [
  ],
  declarations: [
    // Components / Directives/ Pipes
  ],
  imports: [
    RouterModule.forChild(ROUTER_CONFIG),
  ],
})
export default class AppModule {
  static routes = ROUTER_CONFIG;
}
