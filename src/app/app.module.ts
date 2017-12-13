import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavComponent } from './app/navbar/navbar.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component'
import { BartService } from './app/bart_service/bart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,http://puu.sh/yylcI/95676a8320.jpg
    HttpClientModule
  ],
  providers: [BartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
