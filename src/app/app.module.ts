import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardFromComponent } from './card-from/card-from.component';
import { InputNameComponent } from './input-name/input-name.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFromComponent,
    InputNameComponent,
    CreditcardComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
