import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // processedName: string | undefined;
  @Input() item: any;
  @Output() resultData = new EventEmitter<any>();

  handleResult(event: any): void {
    console.log('Data received from child:', event);
  }

  // returnData(name: string) {
  //   if (name) {
  //     // Process the name (e.g., add 'asdfdd' to it)
  //     const processedName = name + 'asdfdd';

  //     // Emit the processed data
  //     this.resultData.emit({ processedName });
  //   }
  // }


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

  returnData(name: string) {
    this.resultData.emit({ name: "Hellowwwww" })
  }

  resultComponent(event: any) {
    this.form?.get('name')?.setValue(event.name);

  }

}
