import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.Loginform=this.fb.group({
      'email':[null, [Validators.required, Validators.email]],
      'password':[null, [Validators.required,Validators.minLength(6)] ],


    });
  }
  Login(formData:NgForm){
    console.log(formData);
  }

}

