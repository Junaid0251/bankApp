import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //database
  database: any = {
    1000: { acno: 1000, uname: "sura", password: 1000, balance: 20 },
    1001: { acno: 1001, uname: "suni", password: 1001, balance: 200 },
    1002: { acno: 1002, uname: "sasi", password: 1002, balance: 0 },

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
        balance: 0
      }
      console.log(database);

      return true;
    }

  }
}
