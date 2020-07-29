import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Packageform:FormGroup;
  MobileNumber:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.Packageform=this.fb.group({
      UserName:[null, [Validators.required,Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      mobileNumber: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.minLength(10)]],
      place:[null, Validators.required],
      date:[null, Validators.required],
      Childs:[null, Validators.required],
      Adults:[null, Validators.required],

    });
  }

  Form(formData:NgForm){
    console.log(formData);
  }
}
