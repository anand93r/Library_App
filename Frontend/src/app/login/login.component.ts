import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={uname:'',
  password:''}
  constructor(
    private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  loginUser () {}

}
