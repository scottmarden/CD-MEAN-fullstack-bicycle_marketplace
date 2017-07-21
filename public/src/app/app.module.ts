//Modules--------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//Components-----------------------------------------------------
import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { BrowseComponent } from './browse/browse.component';
import { MarketComponent } from './market/market.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
//Services-------------------------------------------------------
import { UserService } from './user.service';
import { BicycleService } from './bicycle.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    BrowseComponent,
    MarketComponent,
    MyListingsComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	RouterModule,
	HttpModule,
  ],
  providers: [UserService, BicycleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
