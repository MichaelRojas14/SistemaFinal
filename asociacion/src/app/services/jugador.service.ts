import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Jugador} from "../models/jugador";

@Injectable({
    providedIn: 'root'
})

export class jugadorService {
url = 'http://localhost:3000/jugador/';

    constructor(private http: HttpClient) { }

    getJugador(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deleteJugador(rut: string): Observable<any>{
        return this.http.delete(this.url + rut);
    }
    agregarJugador(jugador: Jugador): Observable<any>{
        return this.http.post(this.url, jugador);
    }
    obtenerJugador(rut: string): Observable<any>{
        return this.http.get(this.url + rut);
    }
    updateJugador(rut: string, jugador: Jugador): Observable<any>{
        return this.http.put(this.url + rut, jugador);
    }

}