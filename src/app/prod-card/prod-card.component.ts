import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../shared/model/prod';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() mobiledata !: Imobile;

}
