import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  array = [
    {name:"dog",age: 5},
    {name:"cat",age: 5},
    {name:"bird",age: 5},
    {name:"ant",age: 5},
    {name:"rat",age: 5}
  ]
}
