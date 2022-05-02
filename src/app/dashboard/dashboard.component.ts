import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // acno = ""
  // pswd = ""
  // amt = ""


  // acntno = ""
  // passwd = ""
  // amount = ""

  //depositForm model

  user:any;
  acno:any;

  deposetForm=this.fb.group({
   acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
   amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  //withdrawForm model

  withdrawForm=this.fb.group({
    acntno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    passwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    Amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
   })


   loginDate:any;

   



  constructor(private ds: DataService,private fb:FormBuilder,private router:Router) {

    this.user=this.ds.currentUser;
   }

  ngOnInit(): void {

    if(!localStorage.getItem("currentAcno")){
      alert("Please Login ...")
      this.router.navigateByUrl("")
    }

    this.loginDate=new Date();
  }

  deposit() {
    // alert("deposit clicked")
    let acno = this.deposetForm.value.acno;
    let pswd = this.deposetForm.value.pswd;
    let amt = this.deposetForm.value.amt;

    // calling deposit() in DataService

    if(this.deposetForm.valid)
    {
      const result = this.ds.deposit(acno, pswd, amt)
    if (result) {
      alert(amt + " succesfully deposited and new balance is " + result)
    }
  }
  else{
    alert("invalid form")
  }

  }

  withdraw() {
    // alert("withdraw clicked")
    let acno = this.withdrawForm.value.acntno;
    let pswd = this.withdrawForm.value.passwd;
    let amt = this.withdrawForm.value.Amount;

    // calling withdraw() in DataService
    if(this.withdrawForm.valid)
    {
      const result = this.ds.withdraw(acno, pswd, amt);
    if (result >= 0) {
      alert(amt + " Amount deducted and new balance is " + result);

    }
  }
  else{
    alert("invalid Form")
  }

  }

  //delete from parent

  deletefromParent(){
    this.acno=JSON.parse(localStorage.getItem("currentAcno")||'')


  }


  //logout

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

  //onCancel
  onCancel(){
    this.acno="";
  }


  // onDelete
  onDelete(event:any){
    alert("delete account " +event)
  }

}
