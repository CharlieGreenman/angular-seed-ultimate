import { Component } from '@angular/core';
import { AppStore } from '../app-store';

@Component({
  template: `
    <h2>About</h2>

    <form #form="ngForm" (ngSubmit)="onSubmit(form.value, form)" novalidate>
      <div>
        <label>
          <input
            #inputEmail="ngModel"
            name="inputEmail"
            [(ngModel)]="email"
            acIsEmail
          >
        </label>
      </div>

      <div *ngIf="form.submitted && inputEmail?.errors?.isEmail" style="background-color: red">
        Please use a valid email address
      </div>

      <button>Submit</button>

    </form>
  `
})
export class About {
  localState = {
    email: ''
  };
  constructor(public appStore: AppStore) {
  }

  onSubmit(value, form) {
    if (form.valid) {
      console.log('form value', value);

      let newState = Object.assign({}, value);
      this.appStore.setState(newState);

      return form.reset(); // doesn't work right now
    }

    console.log('form invalid');

  }
}
