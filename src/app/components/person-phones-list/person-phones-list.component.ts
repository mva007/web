import { Component, OnInit } from '@angular/core';
import { PersonPhoneService } from 'src/app/services/person-phone.service';

@Component({
  selector: 'app-person-phones-list',
  templateUrl: './person-phones-list.component.html',
  styleUrls: ['./person-phones-list.component.css']
})
export class PersonPhonesListComponent implements OnInit {

  personPhones: any;
  currentPersonPhone = null;
  currentIndex = -1;
  phoneNumber = '';

  constructor(private personPhoneService: PersonPhoneService) { }

  ngOnInit(): void {
    this.retrievePersonPhone();
  }

  retrievePersonPhone(): void {
    this.personPhoneService.getAll()
      .subscribe(
        data => {
          this.personPhones = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePersonPhone();
    this.currentPersonPhone = null;
    this.currentIndex = -1;
  }

  setActivePersonPhone(personPhone:any, index:any): void {
    this.currentPersonPhone = personPhone;
    this.currentIndex = index;
  }

  removeAllPersonPhones(): void {
    this.personPhoneService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievePersonPhone();
        },
        error => {
          console.log(error);
        });
  }

  searchPhoneNumber(): void {
    this.personPhoneService.findByPhoneNumber(this.phoneNumber)
      .subscribe(
        data => {
          this.personPhones = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
