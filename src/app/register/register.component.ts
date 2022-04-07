import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acntno=""
  passwd=""

  constructor(private db:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    // alert("registration succesfull");
    let uname=this.uname;
    let acntno=this.acntno;
    let passwd=this.passwd;

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
