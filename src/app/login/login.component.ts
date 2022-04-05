import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //creating a database

  accno ="please enter account number!!!"
  acno =""
  pswd =""

  database={
    1000:{acno:1000,uname:"sura",password:1000,balance:20},
    1001:{acno:1001,uname:"suni",password:1001,balance:200},
    1002:{acno:1002,uname:"sasi",password:1002,balance:0},

  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.accno=event.target.value;
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value;
    
  }

   login(){
    //  alert("logined")
   }


}
