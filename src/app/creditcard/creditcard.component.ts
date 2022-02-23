import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  

  @Input() name: string
  @Input() cardNumber: string
  @Input() expiry: string
  @Input() cvv: string

  constructor() { }

  ngOnInit(): void {
  }

}
