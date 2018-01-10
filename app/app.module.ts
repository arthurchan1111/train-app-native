import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";

import { NavComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { BartService } from './app/bart_service/bart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NativeScriptModule
  ],
  providers: [/*BartService*/],
  bootstrap: [AppComponent],
  schemas: [
      NO_ERRORS_SCHEMA
  ]
})


export class AppModule { }
