import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Texts and dates', icon: 'pi pi-calendar-plus', routerLink: '/' },
          { label: 'Numbers', icon: 'pi pi-dollar', routerLink: 'numbers' },
          { label: 'No commons', icon: 'pi pi-globe', routerLink: 'no-common' },
          { label: 'Order', icon: 'pi pi-sort-alpha-up-alt', routerLink: 'order' }
        ]
      },
      {
       label: 'Custom Pipes',
       icon: 'pi pi-cog' 
      }
    ];
  }
}
