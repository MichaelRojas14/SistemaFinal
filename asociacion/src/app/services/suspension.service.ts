import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Suspension } from "../models/suspension";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class suspensionService {
    url = 'http://localhost:3000/suspension/';
    
        constructor(private http: HttpClient) { }
    
        getSuspension(): Observable<any> {
            return this.http.get(this.url);
        }
        
        deleteSuspension(id_suspension: number): Observable<any>{
            return this.http.delete(this.url + id_suspension);
        }
        guardarSuspension(suspension: Suspension): Observable<any>{
            return this.http.post(this.url, suspension);
        }
        obtenerSuspension(id_suspension: string): Observable<any>{
            return this.http.get(this.url + id_suspension);
        }
        editarSuspension(id_suspension: string, suspension: Suspension): Observable<any>{
            return this.http.put(this.url + id_suspension, suspension);
        }
    }