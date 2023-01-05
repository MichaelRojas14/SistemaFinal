import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Club } from "../models/club";

@Injectable({
    providedIn: 'root'
})

export class clubService {
url = 'http://localhost:3000/club/';

    constructor(private http: HttpClient) { }

    getClub(): Observable<any> {
        return this.http.get(this.url);
    }
    
    deleteClub(id_club: number): Observable<any>{
        return this.http.delete(this.url + id_club);
    }
    guardarClub(club: Club): Observable<any>{
        return this.http.post(this.url, club);
    }
    obtenerClub(id_club: string): Observable<any>{
        return this.http.get(this.url + id_club);
    }
    editarClub(id_club: string, club: Club): Observable<any>{
        return this.http.put(this.url + id_club, club);
    }
}