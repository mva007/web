import { Component, OnInit } from '@angular/core';
import { PersonPhoneService } from 'src/app/services/person-phone.service';

@Component({
  selector: 'app-add-person-phone',
  templateUrl: './add-person-phone.component.html',
  styleUrls: ['./add-person-phone.component.css']
})
export class AddPersonPhoneComponent implements OnInit {

  personPhone = {
    BusinessEntityID: '',
    PhoneNumber: '',
    PhoneNumberTypeID: '1'
  };
  submitted = false;

  constructor(private personPhoneService: PersonPhoneService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      BusinessEntityID: this.personPhone.BusinessEntityID,
      PhoneNumber: this.personPhone.PhoneNumber,
      PhoneNumberTypeID: this.personPhone.PhoneNumberTypeID
    };

    this.personPhoneService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPersonPhone(): void {
    this.submitted = false;
    this.personPhone = {
      BusinessEntityID: '',
      PhoneNumber: '',
      PhoneNumberTypeID: ''
    };
  }

}
