import { Component, OnInit } from '@angular/core';
import { Itudo } from '../shared/model/tudo';
import { tudo } from '../shared/const/tudo';

@Component({
  selector: 'app-tudo-dash',
  templateUrl: './tudo-dash.component.html',
  styleUrls: ['./tudo-dash.component.scss'],
})
export class TudoDashComponent implements OnInit {
  tudoArr: Array<Itudo> = tudo;

  editTudo!: Itudo;

  constructor() {}

  ngOnInit(): void {}

  getNewTudo(tudo: Itudo) {
    this.tudoArr.unshift(tudo);
  }

  getEditTudo(tudo: Itudo) {
    this.editTudo = tudo;
  }

  getUpdateObj(tudo: Itudo) {
    let update_ind = this.tudoArr.findIndex((t) => t.tudoId === tudo.tudoId);
    this.tudoArr[update_ind] = tudo;
  }

  getRemoveId(id: string) {
    this.tudoArr = this.tudoArr.filter((t) => t.tudoId !== id);
  }
}
