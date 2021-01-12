import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AboutComponent } from './Components/about/about.component';
import { ProfilComponent } from './Components/profil/profil.component';
import { ListingsComponent } from './Components/listings/listings.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ChooseTypeSellerComponent } from './Components/choose-type-seller/choose-type-seller.component';

const routes: Routes = [
    
    {
        path: '',
        component : HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },{
        path : 'profile',
        component : ProfilComponent
    },{
        path : 'listings/:id',
        component : ListingsComponent
    },{
        path : 'details',
        component : ItemDetailsComponent
    },{
        path : 'choosingTypeSeller',
        component : ChooseTypeSellerComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }