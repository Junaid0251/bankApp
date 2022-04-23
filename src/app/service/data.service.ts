import { Injectable } from '@angular/core';
import { TransactionsComponent } from '../transactions/transactions.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any;
  currentAcno:any

  //database
  database: any = {
    1000: { acno: 1000, uname: "sura", password: 1000, balance: 20,transaction:[] },
    1001: { acno: 1001, uname: "suni", password: 1001, balance: 200,transaction:[] },
    1002: { acno: 1002, uname: "sasi", password: 1002, balance: 0,transaction:[] },

  }


  constructor() { }

  //register

  register(acno: any, uname: any, password: any) {
    let database = this.database;

    if (acno in database) {
      //already exists
      return false;
    }
    else {
      //add account number to database
      database[acno] = {
        acno,
        uname,
        password,
        balance: 0,
        transaction:[]
      }
      console.log(database);

      return true;
    }

  }


  login(acno: any, pswd: any) {

    let db = this.database;
    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        // alert("login successfull");

        this.currentUser=this.database[acno]["uname"];
        this.currentAcno=acno;

        // this.router.navigateByUrl("dashboard");
        //already exist
        return true;
      }
      else {
        alert("Incorrect password");
        return false;
      }
    }
    else {
      alert("invalid user");
      return false;

    }
  }


  //deposit

  deposit(acno: any, pswd: any, amt: any) {
    let amount = parseInt(amt);
    let database = this.database;

    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        database[acno]["balance"] += amount;
        database[acno]["transaction"].push({
          type:"CREDIT",
          amount:amount
        })
        // console.log(database);
        
        return database[acno]["balance"]
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("invalid user")
      return false
    }
  }


  //withdraw

  withdraw(acno:any,pswd:any,amt:any){
    let amount=parseInt(amt);
    let database=this.database;


    if(acno in database){
      if(database[acno]["password"]==pswd){
        if(database[acno]["balance"]>=amount){
          database[acno]["balance"]-=amount;
          database[acno]["transaction"].push({
            type:"DEBIT",
            amount:amount
          })
          // console.log(database);
          return database[acno]["balance"];
        }
        else{
          alert("insufficient balance")
        }
      }
      else{
        alert("incorrect password")
        return false;
      }
    }
    else{
      alert("invalid user");
      return false;
    }
  }

  //transactions 

  transaction(acno:any){
    return this.database[acno].transaction
  }

}

