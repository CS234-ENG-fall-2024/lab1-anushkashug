import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;

  counter: number;
  interval: any;

  constructor() {


    this.message = "String interpolation is useful";
    this.counter = 0;
    this.interval = setInterval(() => {
      this.counter++;

    }, 1000);

    setTimeout(() => {
      clearInterval(this.interval);
    }, 20000);
  }
}
