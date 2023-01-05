import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Arquero } from "../models/vallabatida";

@Injectable({
    providedIn: 'root'
})

export class arqueroService {
url = 'http://localhost:3000/vallabatida/';

    constructor(private http: HttpClient) { }

    getArquero(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deleteArquero(id_vall_men_batida: number): Observable<any>{
        return this.http.delete(this.url + id_vall_men_batida);
    }
    guardarArquero(arquero: Arquero): Observable<any>{
        return this.http.post(this.url, arquero);
    }
    obtenerArquero(id_vall_men_batida: string): Observable<any>{
        return this.http.get(this.url + id_vall_men_batida);
    }
    editarArquero(id_vall_men_batida: string, arquero: Arquero): Observable<any>{
        return this.http.put(this.url + id_vall_men_batida, arquero);
    }
}