import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Goleador } from "../models/goleador";

@Injectable({
    providedIn: 'root'
})

export class goleadorService {
url = 'http://localhost:3000/tablagoleador/';

    constructor(private http: HttpClient) { }

    getGoleador(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deleteGoleador(id_tabla_goleador: number): Observable<any>{
        return this.http.delete(this.url + id_tabla_goleador);
    }
    guardarGoleador(goleador: Goleador): Observable<any>{
        return this.http.post(this.url, goleador);
    }
    obtenerGoleador(id_tabla_goleador: string): Observable<any>{
        return this.http.get(this.url + id_tabla_goleador);
    }
    editarGoleador(id_tabla_goleador: string, goleador: Goleador): Observable<any>{
        return this.http.put(this.url + id_tabla_goleador, goleador);
    }
}