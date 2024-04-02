import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss']
})


export class BoxDetailsComponent implements OnInit {

  @Input() item: any
  @Output() resultData = new EventEmitter<any>()
  interview: object | undefined;
  ngOnInit(): void {
    console.log(this.item)
  }
  returnData(name: string) {
    this.resultData.emit({ firstName: "Hellowwwww" })
  }

}
