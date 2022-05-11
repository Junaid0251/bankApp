import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TransactionsComponent } from '../transactions/transactions.component';

const options ={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root',
})
export class DataService {

  currentUser:any;
  currentAcno:any

  //database
  database: any = {
    1000: { acno: 1000, uname: "sura", password: 1000, balance: 20,transaction:[] },
    1001: { acno: 1000, uname: "sura", password: 1000, balance: 20,transaction:[] },
    1002: { acno: 1002, uname: "sasi", password: 1002, balance: 0,transaction:[] },

  }


  constructor(private http:HttpClient) { 
    this.getDetails();
  }


  //to save data in local storage

  saveDetails(){
    localStorage.setItem("database",JSON.stringify(this.database))

    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }


    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }

  }


  //get from local storage

  getDetails(){
    if(localStorage.getItem("database")){

      this.database=JSON.parse(localStorage.getItem("database")||'')

    }

    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')

    }

    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')

    }


  }

  //register

  register(acno: any, uname: any, password: any) {
    const data={
      uname,
      acno,
      password
    }

    //register API call
    return this.http.post ('http://localhost:3000/register',data)

  }

  //login

  login(acno: any, pswd: any) {

   //request body
   const data ={
     acno,
     pswd,
   }

   //login api call

   return this.http.post('http://localhost:3000/login',data)
  }


  //deposit


  //addd token to header
  getOptions(){
    
    //fetch token

    const token =JSON.parse(localStorage.getItem("token")||"")

    //create HttpHeader

    let headers =new HttpHeaders

    if(token){
      headers = headers.append('x-access-token',token)
      options.headers=headers;
      
    }
    return options
  }

  deposit(acno: any, pswd: any, amt: any) {

    const data={
      amt,
      acno,
      pswd
    }


    //deposit API call
    return this.http.post ('http://localhost:3000/deposit',data,this.getOptions())
    
  }
  


  //withdraw

  withdraw(acno:any,pswd:any,amt:any){

    const data={
      amt,
      acno,
      pswd
    }


    //withdraw API call
    return this.http.post ('http://localhost:3000/withdraw',data,this.getOptions())
    
  }
   
  

  //transactions 

  transaction(acno:any){

   const data={
     acno
   }

   //transaction API call

   return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
  } 

}

