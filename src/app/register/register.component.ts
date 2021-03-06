import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acntno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    passwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    // alert("registration succesfull");
    let uname=this.registerForm.value.uname;
    let acntno=this.registerForm.value.acntno;
    let passwd=this.registerForm.value.passwd;

    if(this.registerForm.valid){
      //asynchronus
      this.db.register(acntno,uname,passwd)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("");
        }
      },
      result=>{
        alert(result.error.message)
      }
      
      )
      
    }
    else{
      alert("invalid form")
    }
  }

}
