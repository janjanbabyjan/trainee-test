import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  name: string = '';
  type: string = '';
  age: any = null;
  indexUpdate: number = 0

  array = [
    { name: "meow", type: "cat", age: 10 },
    { name: "bok", type: "dog", age: 12 }
  ]

  constructor() {

  }

  ngOnInit(): void {
  }
  createRow(){
    this.array.push({name:this.name,type:this.type,age:this.age})
    this.name = ''
    this.type = ''
    this.age = null
  }

  setUpdateRow(item:any = null,index:number){
    this.name = item.name
    this.type = item.type
    this.age = item.age
    this.indexUpdate = index
  }
  updateRow(){
    this.array[this.indexUpdate].name = this.name;
    this.array[this.indexUpdate].type = this.type;
    this.array[this.indexUpdate].age = this.age;
    this.indexUpdate = 0
    this.name = ''
    this.type = ''
    this.age = null

  }
  deleteRow(index:number){
    this.array.splice(index,1)
  }
}
