import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { NavbarComponent } from './common/navbar/navbar.component';
>>>>>>> a49d90d656a82b9d43edc2930a803b7ed9f37930
=======
import { NavbarComponent } from './common/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 3c814f4946ecd4ed36af546699c77964f352f0b4


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    LoginComponent

=======
    NavbarComponent
<<<<<<< HEAD
>>>>>>> a49d90d656a82b9d43edc2930a803b7ed9f37930
=======

>>>>>>> 3c814f4946ecd4ed36af546699c77964f352f0b4
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
