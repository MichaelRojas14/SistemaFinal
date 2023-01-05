import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent implements OnInit {

  constructor(private router: Router,
              private _loginServise: loginService

  ) { }

  ngOnInit(): void {
  }

  logout() {

    this.router.navigate(['/login']);

    this._loginServise.logout();
      }

}
