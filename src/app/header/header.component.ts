import { Component, OnInit,HostListener } from '@angular/core';

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
  head_variable=false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop>0||document.documentElement.scrollTop>120){
      this.head_variable=true;
    }
    else{
      this.head_variable=false;
    }
  }

  getActiveTab(tabname:string){
    this.activetab = tabname;
  }
}
