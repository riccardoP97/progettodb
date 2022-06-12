import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { User } from "../Module/user";

@Injectable({providedIn:"root"})
export class UserService{
baseUrl ="http://localhost:3000/utenti"
    constructor(private http : HttpClient){

    }

    getUtenti(){
        return this.http.get<User[]>(this.baseUrl)
    }

    addUtente(utente:User){
        return this.http.post<any>(this.baseUrl,utente)
    }

    deleteUtente(id:any){
        return this.http.delete<any>(this.baseUrl+'/'+id)
    }
    editUtente(id:any,utente:any){
        return this.http.put<any>(this.baseUrl+'/'+id,utente)
    }
}