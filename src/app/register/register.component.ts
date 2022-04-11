import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //RegisterForm Model

  registerForm=this.fb.group({
    uname:[''],
    acntno:[''],
    passwd:['']
  })

  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    // alert("registration succesfull");
    let uname=this.registerForm.value.uname;
    let acntno=this.registerForm.value.acntno;
    let passwd=this.registerForm.value.passwd;

    const reslt=this.db.register(acntno,uname,passwd)
    if(reslt){
      alert("registered")
      this.router.navigateByUrl("");
    }
    else{
      alert("already exist...press log in")
    }
  }

}
