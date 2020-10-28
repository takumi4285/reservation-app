import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { NavbarComponent } from './common/navbar/navbar.component';
>>>>>>> a49d90d656a82b9d43edc2930a803b7ed9f37930


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    LoginComponent

=======
    NavbarComponent
>>>>>>> a49d90d656a82b9d43edc2930a803b7ed9f37930
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
