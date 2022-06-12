import { Component } from '@angular/core';
import { User } from './Module/user';
import { UserService } from './Service/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progetto Database';

showTable=false;
showForm=false;
utenti:User[]=[];

nomeUtenteDaInserire="";
cognomeUtenteDaInserire="";
etaUtenteDaInserire="";

mostra(element:string){
  this.showTable=false;
  this.showForm=false;

  if(element=="table"){
    this.showTable=true;
  }
  if(element=="form"){
    this.showForm=true;
  }
}

nascondi(element:string){
  if(element=="table"){
    this.showTable=false;
  }

  if(element=="form"){
    this.showForm=false;
    this.showTable=true;
  }
}

constructor(private userService: UserService){
  this.userService.getUtenti().subscribe(
    (response:any) => {
      this.utenti=response;
    }
  )
}

aggiungiUtente(){
  let utente:any = {
    nome:this.nomeUtenteDaInserire,
    cognome:this.cognomeUtenteDaInserire,
    eta:this.etaUtenteDaInserire
  };
  this.userService.addUtente(utente).subscribe(
    (res) => {
    }
    );
    this.nomeUtenteDaInserire="";
    this.cognomeUtenteDaInserire="";
    this.etaUtenteDaInserire="";
}

}
