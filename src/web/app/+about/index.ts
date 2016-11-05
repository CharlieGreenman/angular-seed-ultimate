import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ANGULARCLASS_FORM_VALIDATOR_DIRECTIVES } from '@angularclass/form-validators';

import { About } from './about';

export const ROUTER_CONFIG = [
  { path: '', component: About, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    About,
    ...ANGULARCLASS_FORM_VALIDATOR_DIRECTIVES
  ],
  imports: [
    RouterModule.forChild(ROUTER_CONFIG),
    FormsModule,
    CommonModule
  ]
})
export default class AboutModule {
  static routes = ROUTER_CONFIG;
}

