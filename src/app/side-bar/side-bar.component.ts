import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
@Output() openTable = new EventEmitter<string>();
@Output() openForm = new EventEmitter<string>();
   constructor() { }

  ngOnInit(): void {
  }

  showTable(){
    this.openTable.emit("");
  }

  showForm(){
    this.openForm.emit("");
  }
}
