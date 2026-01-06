import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itudo } from '../shared/model/tudo';

@Component({
  selector: 'app-tudo-form',
  templateUrl: './tudo-form.component.html',
  styleUrls: ['./tudo-form.component.scss'],
})
export class TudoFormComponent implements OnInit, OnChanges {
  @ViewChild('tudoForm') tudoForm!: NgForm;
  IsEditMode: boolean = false;
  edit_id: string = '';
  @Output() EmitNewTudo: EventEmitter<Itudo> = new EventEmitter<Itudo>();
  @Output() EmitUpdateTudo: EventEmitter<Itudo> = new EventEmitter<Itudo>();
  @Input() getEditTudo!: Itudo;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['getEditTudo'] && this.tudoForm) {
      this.IsEditMode = true;
      this.edit_id = this.getEditTudo.tudoId;
      this.tudoForm.form.patchValue(this.getEditTudo);
    }
  }

  onTudoAdd() {
    if (this.tudoForm.valid) {
      let tudoObj: Itudo = {
        ...this.tudoForm.form.value,
        tudoId: Date.now().toString(),
      };
      this.tudoForm.reset();
      this.EmitNewTudo.emit(tudoObj);
    }
  }

  onUpdateTudo() {
    if (this.tudoForm.valid) {
      let update_obj: Itudo = {
        ...this.tudoForm.form.value,
        tudoId: this.edit_id,
      };

      this.tudoForm.reset();

      this.EmitUpdateTudo.emit(update_obj);
    }
  }
}
