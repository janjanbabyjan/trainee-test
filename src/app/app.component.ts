import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
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
    console.log(this.form)

  }
}
