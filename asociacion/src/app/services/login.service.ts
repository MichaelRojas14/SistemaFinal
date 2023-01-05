import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, of, tap } from "rxjs";
import { Club } from "../models/club";
import { login } from "../models/login";
import { Login } from "../models/usuario";

@Injectable({
    providedIn: 'root'
})

export class loginService {
url = 'http://localhost:3000/login/';

constructor(private http: HttpClient,  
            private router: Router) { }

  getAuthToken():string {
    return sessionStorage.getItem('token')! 
    }
    
  login(login: login) {

    const url = `${this.url}`;
    return this.http.post<login>(url, login)
      .pipe(

        tap((resp: any) => {

          if (resp.ok == true) {
            sessionStorage.setItem('token', resp.token!)
           // console.log("LA RESPUESA ES: ", resp);

            return resp.ok
          }
        }), map((resp: any) => resp),
        catchError(err => of(err.error.msg))
      )

  }
  logout() {

    sessionStorage.clear();
    localStorage.clear();
    // o e puede borrar solo el TOKEN asi removeItem('token')
  }
    
}