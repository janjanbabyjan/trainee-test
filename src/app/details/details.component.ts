import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  interview = {
    firstName: "Supattra",
    lastName: "Pangjun",
    nickName: "Jan",
    tel: '094-3734085',
    email: 'Supattra.pa@kkumail.com',
    git: 'janjanbabyjan'
    
  }

  resultComponent(event: any) {
    this.interview.firstName = event.firstName
  }
}
