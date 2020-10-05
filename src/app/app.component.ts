import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {

  flag: boolean;

  list = ['A', 'B', 'C'];

  value: 'A' | 'B' = 'A'

  onClick() {
    this.flag = !this.flag;
  }

  toggle() {
    this.value = this.value === 'A' ? 'B' : 'A';
  }
}
