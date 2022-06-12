import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../Module/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() chiudiForm = new EventEmitter<string>();

  constructor() { }

  nomeUtenteDaInserire = "";
  cognomeUtenteDaInserire = "";
  etaUtenteDaInserire = "";

  ngOnInit(): void {
  }

  closeForm() {
    this.chiudiForm.emit();
  }

  aggiungiUtente() {
  }
}
