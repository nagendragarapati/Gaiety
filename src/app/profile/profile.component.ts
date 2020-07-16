import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isDisplay=false;
  toggleDisplay(){
    this.isDisplay=!this.isDisplay;
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init();


  }

}
