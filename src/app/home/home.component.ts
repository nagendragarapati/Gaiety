import { Component, OnInit,HostListener } from '@angular/core';
import * as AOS from 'aos';
declare const first:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pic(){
    first();
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  

}
