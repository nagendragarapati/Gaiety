import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  activetab = "Home";

  constructor() { }

  ngOnInit(): void {
  }


  getActiveTab(tabname:string){
    this.activetab = tabname;
  }
}
