import { Component, OnInit } from '@angular/core';
import { Imobile } from '../shared/model/prod';
import { mobileProducts } from '../shared/const/prod';

@Component({
  selector: 'app-prod-dash',
  templateUrl: './prod-dash.component.html',
  styleUrls: ['./prod-dash.component.scss']
})
export class ProdDashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobileArr : Array<Imobile> = mobileProducts

}
