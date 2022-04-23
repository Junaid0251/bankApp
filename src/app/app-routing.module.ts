import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [


  //login path
  {path:'',component:LoginComponent},    //if we give path login then we need to specify localhost:4200/login to see login


  // dashboard path
  {path:'dashboard',component:DashboardComponent},

  //register
  {path:'register',component:RegisterComponent},
  //transactions
  {path:'transactions',component:TransactionsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
