import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing-e2e';
  points = 1;
  numero = 10;

  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  }
}
