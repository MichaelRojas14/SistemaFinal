import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Posicion } from "../models/tablaposicion";

@Injectable({
    providedIn: 'root'
})

export class posicionService {
url = 'http://localhost:3000/tablaposicionhonor/';

    constructor(private http: HttpClient) { }

    getPosicion(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deletePosicion(id_tabla: number): Observable<any>{
        return this.http.delete(this.url + id_tabla);
    }
    guardarPosicion(posicion: Posicion): Observable<any>{
        return this.http.post(this.url, posicion);
    }
    obtenerPosicion(id_tabla: string): Observable<any>{
        return this.http.get(this.url + id_tabla);
    }
    editarPosicion(id_tabla: string, posicion: Posicion): Observable<any>{
        return this.http.put(this.url + id_tabla, posicion);
    }
}