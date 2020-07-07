import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import * as AOS from 'aos';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Signupform:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    AOS.init();

    this.Signupform=this.fb.group({
      UserName:[null, [Validators.required,Validators.minLength(3)]],

      FirstName:[null, [Validators.required,Validators.minLength(3)]],
      LastName:[null, [Validators.required,Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      Password:[null, [Validators.required,Validators.minLength(6)]],


    });
  }
  Signup(formData:NgForm){
    console.log(formData);
  }

}
