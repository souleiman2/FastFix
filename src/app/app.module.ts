import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AboutComponent } from './Components/about/about.component';
import { PortraitCardComponent } from './Components/portrait-card/portrait-card.component';
import { CustomCarouselComponent } from './Components/custom-carousel/custom-carousel.component';
import { ProfilComponent } from './Components/profil/profil.component';
import { ListingsComponent } from './Components/listings/listings.component';
import { ListingCardComponent } from './Components/listing-card/listing-card.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ChooseTypeSellerComponent } from './Components/choose-type-seller/choose-type-seller.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ToolbarComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        AboutComponent,
        PortraitCardComponent,
        CustomCarouselComponent,
        ProfilComponent,
        ListingsComponent,
        ListingCardComponent,
        ItemDetailsComponent,
        ChooseTypeSellerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
