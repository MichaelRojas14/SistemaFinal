import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cincuenta } from "../models/cincuenta";
import { Juvenil } from "../models/juvenil";

@Injectable({
    providedIn: 'root'
})

export class cincuentaService {
url = 'http://localhost:3000/tablaposicion50/';

    constructor(private http: HttpClient) { }

    getPosicion(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deletePosicion(id_tabla50: number): Observable<any>{
        return this.http.delete(this.url + id_tabla50);
    }
    guardarPosicion(cincuenta: Cincuenta): Observable<any>{
        return this.http.post(this.url, cincuenta);
    }
    obtenerPosicion(id_tabla50: string): Observable<any>{
        return this.http.get(this.url + id_tabla50);
    }
    editarPosicion(id_tabla50: string, cincuenta: Cincuenta): Observable<any>{
        return this.http.put(this.url + id_tabla50, cincuenta);
    }
}