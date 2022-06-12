import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../Module/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 @Output() chiudiTable = new EventEmitter<string>()
 @Input() utenti:User[]=[];
 constructor() { }

  ngOnInit(): void {
  }

  closeTable(){
  this.chiudiTable.emit();
  }
}
