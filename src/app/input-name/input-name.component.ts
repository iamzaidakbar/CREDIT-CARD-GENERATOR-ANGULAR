import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {

  @Input() control: FormControl
  @Input() label : string
  @Input() placeholder : string
  @Input() type: string

  constructor() { }

  ngOnInit(): void {
  }

  showErrors(){
    const { dirty, touched, errors } = this.control
    return touched && dirty && errors
  }

}
 