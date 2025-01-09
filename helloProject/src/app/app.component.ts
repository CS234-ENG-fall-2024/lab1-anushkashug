import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  message: string;
  counter: number;
  private timer: any;

  constructor() {
    this.message = 'String interpolation is useful';
    this.counter = 0;
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);

    setTimeout(() => {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }, 20000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
