import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home, Yolo } from './home';


export const ROUTER_CONFIG = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'yolo', component: Yolo },
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Yolo,
    Home
  ],
  imports: [
    RouterModule.forChild(ROUTER_CONFIG)
  ],
})
export default class HomeModule {
}

