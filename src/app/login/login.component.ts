import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //creating a database

  acplace ="please enter account number!!!"
  accno =""
  pswd =""

  database:any={
    1000:{acno:1000,uname:"sura",password:1000,balance:20},
    1001:{acno:1001,uname:"suni",password:1001,balance:200},
    1002:{acno:1002,uname:"sasi",password:1002,balance:0},

  }

  constructor() { }

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
  let acno=this.accno;
    let pswd=this.pswd;

    let db=this.database;
    if(acno in db){
      if(pswd==db[acno]["password"]){
        alert("login successfull");
      }
      else{
        alert("Incorrect password");
      }
    }
    else{
      alert("invalid user");
    }
}

}