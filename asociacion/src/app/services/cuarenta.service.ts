import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cuarenta } from "../models/cuarenta";
import { Primera } from "../models/primera";

@Injectable({
    providedIn: 'root'
})

export class cuarentaService {
url = 'http://localhost:3000/tablaposicion45/';

    constructor(private http: HttpClient) { }

    getPosicion(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deletePosicion(id_tabla45: number): Observable<any>{
        return this.http.delete(this.url + id_tabla45);
    }
    guardarPosicion(cuarenta: Cuarenta): Observable<any>{
        return this.http.post(this.url, cuarenta);
    }
    obtenerPosicion(id_tabla45: string): Observable<any>{
        return this.http.get(this.url + id_tabla45);
    }
    editarPosicion(id_tabla45: string, cuarenta: Cuarenta): Observable<any>{
        return this.http.put(this.url + id_tabla45, cuarenta);
    }
}