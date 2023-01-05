import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Calendario } from "../models/calendario";

@Injectable({
    providedIn: 'root'
})

export class calendarioService {
url = 'http://localhost:3000/calendario/';

    constructor(private http: HttpClient) { }

    getCalendario(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deleteCalendario(id_calendario: number): Observable<any>{
        return this.http.delete(this.url + id_calendario);
    }
    agregarCalendario(calendario: Calendario): Observable<any>{
        return this.http.post(this.url, calendario);
    }
    obtenerCalendario(id_calendario: string): Observable<any>{
        return this.http.get(this.url + id_calendario);
    }
    updateCalendario(id_calendario: string, calendario: Calendario): Observable<any>{
        return this.http.put(this.url + id_calendario, calendario);
    }
}