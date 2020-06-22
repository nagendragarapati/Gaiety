import { Component, OnInit } from '@angular/core';
declare const scrollFunction:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  onscroll = function() {scrollFunction()};

  constructor() { }

  ngOnInit(): void {
  }

}
