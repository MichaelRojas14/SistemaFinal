import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Serie } from "../models/serie";

@Injectable({
    providedIn: 'root'
})

export class serieService {
url = 'http://localhost:3000/serie/';

    constructor(private http: HttpClient) { }

    getSerie(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deleteSerie(id_serie: number): Observable<any>{
        return this.http.delete(this.url + id_serie);
    }
    guardarSerie(serie: Serie): Observable<any>{
        return this.http.post(this.url, serie);
    }
    obtenerSerie(id_serie: string): Observable<any>{
        return this.http.get(this.url + id_serie);
    }
    editarSerie(id_serie: string, serie: Serie): Observable<any>{
        return this.http.put(this.url + id_serie, serie);
    }
}