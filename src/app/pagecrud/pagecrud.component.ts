import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagecrud',
  templateUrl: './pagecrud.component.html',
  styleUrls: ['./pagecrud.component.scss']
})
export class PagecrudComponent implements OnInit {

  name: string = '';
  age: any = null;
  indexUpdate : number = 0

  array = [
    {name:"dog",age: 5},
    {name:"cat",age: 5},
    {name:"bird",age: 5},
    {name:"ant",age: 5},
    {name:"rat",age: 5}
  ]

  constructor(){

  }

  ngOnInit(): void {

  }

  createRow() {
    this.array.push({name:this.name,age:this.age})
    this.name = ''
    this.age = null
  }

  setUpdateRow(item:any = null,index:number){
    this.name = item.name;
    this.age = item.age
    this.indexUpdate = index
  }

  updateRow(){
    this.array[this.indexUpdate].name = this.name;
    this.array[this.indexUpdate].age = this.age;
    this.indexUpdate = 0
    this.name = ''
    this.age = null
  }

  deleteRow(index:number) {
    this.array.splice(index,1)
  }
}
