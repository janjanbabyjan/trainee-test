import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-output',
  templateUrl: './show-output.component.html',
  styleUrls: ['./show-output.component.scss']
})
export class ShowOutputComponent implements OnInit {
  @Output() resultData = new EventEmitter<any>();

  title: String = 'Jan eieieiei';
  form: FormGroup | undefined

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      lname: ['', Validators.compose([Validators.required])],
      nname: ['', Validators.compose([Validators.required])],
      id: ['', Validators.compose([Validators.required, Validators.maxLength(13)])],
      phone: ['', Validators.compose([Validators.required, Validators.maxLength(10)])]
    })
    throw new Error ('Method not implements');
  }


  sendData(){
    const data = {
      name:  this.form?.controls['name'].value,
      lname:  this.form?.controls['lname'].value,
      nname:  this.form?.controls['nname'].value,
      id:  this.form?.controls['id'].value,
      phone:  this.form?.controls['phone'].value,
    };
    console.log(data)
    this.resultData.emit(data);
  }
}
