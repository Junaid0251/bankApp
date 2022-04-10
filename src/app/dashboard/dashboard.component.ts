import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno = ""
  pswd = ""
  amt = ""
  acntno = ""
  passwd = ""
  amount = ""

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }

  deposit() {
    // alert("deposit clicked")
    let acno = this.acno;
    let pswd = this.pswd;
    let amt = this.amt;

    const result = this.ds.deposit(acno, pswd, amt)
    if (result) {
      alert(amt + " succesfully deposited and new balance is " + result)
    }

  }

  withdraw() {
    // alert("withdraw clicked")
    let acno = this.acntno;
    let pswd = this.passwd;
    let amt = this.amount;

    const result = this.ds.withdraw(acno, pswd, amt);
    if(result){
      alert(amt +" Amount deducted and new balance is "+ result);
      
    }

  }

}
