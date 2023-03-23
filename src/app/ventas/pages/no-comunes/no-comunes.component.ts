import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: []
})
export class NoComunesComponent {
  // i18nSelect
  name: string = 'Malala Yousafzai';
  gender: string = 'female';

  invitationMap: { [k: string]: string } = {
    male: 'invite his',
    female: 'invite her'
  };

  // i18nPlural
  customer: string[] = ['Maria', 'Norberto', 'Perez', 'Hanna', 'Chris'];
  customersMap: { [k: string]: string } = {
    '=0': "we don't have customers waiting.",
    '=1': 'we have a 1 customer waiting.',
    '=2': 'we have a 2 customers waiting.',
    other: 'we have a # customers waiting.'
  };

  changeCustomer() {
    this.name = 'Lionel Messi';
    this.gender = 'male';
  }

  deleteCustomer() {
    this.customer.pop();
  }

  //KeyValue Pipe
  people = {
    name: 'Leonardo',
    age: 28,
    adress: 'Mendoza, Argentina'
  };

  //Json Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Robin',
      fly: false
    },
    {
      name: 'Aquaman',
      fly: false
    }
  ];

  // Async Pipe
  myObservable = interval(5000); //0,1,2,3,4,5,6,

  valuePromise = new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle('Tenemos data de promesa');
    }, 3500);
  });
}
