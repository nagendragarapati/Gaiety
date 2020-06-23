import { Component } from '@angular/core';
declare const scrollFunction:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onscroll = function() {scrollFunction()};
  title = 'travello';
}
