import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-fixedcontent',
  templateUrl: './fixedcontent.component.html',
  styleUrls: ['./fixedcontent.component.css']
})
export class FixedcontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();

  }

}
