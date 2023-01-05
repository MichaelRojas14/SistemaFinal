import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Club } from "../models/club";
import { Partido_Serie } from "../models/partserie";

@Injectable({
    providedIn: 'root'
})

export class partserieService {
url = 'http://localhost:3000/partido-serie/';

    constructor(private http: HttpClient) { }

    getPartSerie(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deletePartSerie(id_part_serie: number): Observable<any>{
        return this.http.delete(this.url + id_part_serie);
    }
    guardarPartSerie(partido_serie: Partido_Serie): Observable<any>{
        return this.http.post(this.url, partido_serie);
    }
    obtenerPartSerie(id_part_serie: string): Observable<any>{
        return this.http.get(this.url + id_part_serie);
    }
    updatePartSerie(id_part_serie: string, partido_serie: Partido_Serie): Observable<any>{
        return this.http.put(this.url + id_part_serie, partido_serie);
    }
}