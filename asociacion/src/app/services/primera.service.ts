import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Primera } from "../models/primera";

@Injectable({
    providedIn: 'root'
})

export class primeraService {
url = 'http://localhost:3000/tablaposicionprimera/';

    constructor(private http: HttpClient) { }

    getPosicion(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deletePosicion(id_tabla_prim: number): Observable<any>{
        return this.http.delete(this.url + id_tabla_prim);
    }
    guardarPosicion(primera: Primera): Observable<any>{
        return this.http.post(this.url, primera);
    }
    obtenerPosicion(id_tabla_prim: string): Observable<any>{
        return this.http.get(this.url + id_tabla_prim);
    }
    editarPosicion(id_tabla_prim: string, primera: Primera): Observable<any>{
        return this.http.put(this.url + id_tabla_prim, primera);
    }
}