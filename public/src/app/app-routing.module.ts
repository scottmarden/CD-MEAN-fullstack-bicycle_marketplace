import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { BrowseComponent } from './browse/browse.component';
import { MyListingsComponent } from './my-listings/my-listings.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: LoginRegComponent},
	{ path: 'browse', component: BrowseComponent},
	{ path: 'my_listings', component: MyListingsComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
