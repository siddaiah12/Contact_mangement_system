import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login, signup } from '../contactmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  signUpForm!:FormGroup;
  loginForm!:FormGroup
  constructor(private fb:FormBuilder, private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
isShow = false;
signUp(){
  this.isShow = true;
}
login(){
  this.isShow = false
}
submitSignUp(){
  this.http.post<signup>("http://localhost:3000/singnup",this.signUpForm.value).subscribe(res=>{
    alert("Form Submitted Successfully!")
    this.signUpForm.reset()
  })
}
submitLogin(){
  this.http.get<login[]>("http://localhost:3000/singnup").subscribe(res=>{
// Match Email and password logic
  const user = res.find((a:any)=>{
    return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
  })
  // check login condition
  if(user){
    alert("User Login Successfully")
    this.loginForm.reset()
    this.router.navigate(["/ContactList"])
    // store data in localstorage
    localStorage.setItem('loginData',JSON.stringify(user))

  } else{
    alert("User Not found with theese credentials")
    this.loginForm.reset()
  }
  },err=>{
alert("Some thing went wrong please try again")
this.loginForm.reset()

  })
}
}
