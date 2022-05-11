import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  acplace ="please enter account number!!!"
  accno =""
  pswd =""
 //creating a database

  // database:any={
  //   1000:{acno:1000,uname:"sura",password:1000,balance:20},
  //   1001:{acno:1001,uname:"suni",password:1001,balance:200},
  //   1002:{acno:1002,uname:"sasi",password:1002,balance:0},

  // }

  //loginform

  loginform=this.fb.group({
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  // acnoChange(event:any){
  //   this.accno=event.target.value;
  //   // console.log(this.accno);
    
    
  // }

  // pswdChange(event:any){
  //   this.pswd=event.target.value;
  //   // console.log(this.pswd);
    
    
  // }


//  login using event binding /two way

  //  login(){
  //   //  alert("logined")
  //   let acno=this.accno;
  //   let pswd=this.pswd;

  //   let db=this.database;
  //   if(acno in db){
  //     if(pswd==db[acno]["password"]){
  //       alert("login successfull");
  //     }
  //     else{
  //       alert("Incorrect password");
  //     }
  //   }
  //   else{
  //     alert("invalid user");
  //   }
  //  }

// login using template referencing

//   login(a:any,p:any){
//     let acno=a.value;
//     let pswd=p.value;
// // console.log(p.value);

//     let db=this.database;
//     if(acno in db){
//       if(pswd==db[acno]["password"]){
//         alert("login successfull");
//       }
//       else{
//         alert("Incorrect password");
//       }
//     }
//     else{
//       alert("invalid user");
//     }
// }

login(){
 
  
  let acno=this.loginform.value.accno;
    let pswd=this.loginform.value.pswd;
    console.log(this.loginform);
    if(this.loginform.valid){

    this.ds.login(acno,pswd)
    .subscribe((result:any) =>{

      if(result){
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem('token',JSON.stringify(result.token))

        alert(result.message);
        this.router.navigateByUrl("dashboard");
      
    }
    },result=>{
      alert(result.error.message)
    })
    
  }
  else{
    alert("linvalid form")
  }
}

}