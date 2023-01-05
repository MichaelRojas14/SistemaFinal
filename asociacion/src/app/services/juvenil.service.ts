import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Juvenil } from "../models/juvenil";

@Injectable({
    providedIn: 'root'
})

export class juvenilService {
url = 'http://localhost:3000/tablaposicionjuvenil/';

    constructor(private http: HttpClient) { }

    getPosicion(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deletePosicion(id_tabla_juv: number): Observable<any>{
        return this.http.delete(this.url + id_tabla_juv);
    }
    guardarPosicion(juvenil: Juvenil): Observable<any>{
        return this.http.post(this.url, juvenil);
    }
    obtenerPosicion(id_tabla_juv: string): Observable<any>{
        return this.http.get(this.url + id_tabla_juv);
    }
    editarPosicionJuv(id_tabla_juv: string, juvenil: Juvenil): Observable<any>{
        return this.http.put(this.url + id_tabla_juv, juvenil);
    }
}