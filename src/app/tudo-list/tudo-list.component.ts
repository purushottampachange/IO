import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../shared/model/postCard';
import { Itudo } from '../shared/model/tudo';

@Component({
  selector: 'app-tudo-list',
  templateUrl: './tudo-list.component.html',
  styleUrls: ['./tudo-list.component.scss'],
})
export class TudoListComponent implements OnInit {
  @Input() getArr!: Array<Itudo>;

  @Output() emitEditTudo: EventEmitter<Itudo> = new EventEmitter<Itudo>();
  @Output() emitRemoveID: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onTudoEdit(tudo: Itudo) {
    this.emitEditTudo.emit(tudo);
  }

  onTudoRemove(id: string) {
    this.emitRemoveID.emit(id);
  }
}
