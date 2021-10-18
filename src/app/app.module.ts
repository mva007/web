import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonPhoneComponent } from './components/add-person-phone/add-person-phone.component';
import { PersonPhoneDetailsComponent } from './components/person-phone-details/person-phone-details.component';
import { PersonPhonesListComponent } from './components/person-phones-list/person-phones-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonPhoneComponent,
    PersonPhoneDetailsComponent,
    PersonPhonesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
