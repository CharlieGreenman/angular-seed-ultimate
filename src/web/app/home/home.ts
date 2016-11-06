import { Component } from '@angular/core';


@Component({})
export class Home {
  constructor() {
    console.log('Home');
  }
}

@Component({
  template: `
    <div>
      <h4>YOLO</h4>
    </div>
  `
})
export class Yolo {
  constructor() {
    console.log('Yolo');
  }
}
