import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component'

const routes: Routes = [

  {
    path: '',
    component : HomeComponent
  },{
    path : 'login',
    component : LoginComponent
  },{
    path : 'register',
    component : RegisterComponent
  }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
