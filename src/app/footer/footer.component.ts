import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare const animate:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    animate();

  }

}
