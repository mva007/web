import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonPhonesListComponent} from './components/person-phones-list/person-phones-list.component';
import { PersonPhoneDetailsComponent} from './components/person-phone-details/person-phone-details.component';
//import { AddPersonPhoneComponent} from './components/person-phone-details/person-phone-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'personPhones', pathMatch: 'full' },
  { path: 'personPhones', component: PersonPhonesListComponent },
  { path: 'personPhones/:id', component: PersonPhoneDetailsComponent }/*,
  { path: 'add', component: AddPersonPhoneComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
