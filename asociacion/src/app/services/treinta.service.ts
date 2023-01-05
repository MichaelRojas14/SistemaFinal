import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Primera } from "../models/primera";
import { Treinta } from "../models/treinta";

@Injectable({
    providedIn: 'root'
})

export class treintaService {
url = 'http://localhost:3000/tablaposicion35/';

    constructor(private http: HttpClient) { }

    getPosicion(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deletePosicion(id_tabla35: number): Observable<any>{
        return this.http.delete(this.url + id_tabla35);
    }
    guardarPosicion(treinta: Treinta): Observable<any>{
        return this.http.post(this.url, treinta);
    }
    obtenerPosicion(id_tabla35: string): Observable<any>{
        return this.http.get(this.url + id_tabla35);
    }
    editarPosicion(id_tabla35: string, treinta: Treinta): Observable<any>{
        return this.http.put(this.url + id_tabla35, treinta);
    }
}