import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cincuenta } from 'src/app/models/cincuenta';
import { cincuentaService } from 'src/app/services/cincuenta.service';

@Component({
  selector: 'app-tabla-cincuenta',
  templateUrl: './tabla-cincuenta.component.html',
  styleUrls: ['./tabla-cincuenta.component.css']
})
export class TablaCincuentaComponent implements OnInit {
  listaPosicion: Cincuenta[] = [];

  constructor( private router: Router,
               private _cincuentaService: cincuentaService,
               private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.obtenerPosicion();
  }

  obtenerPosicion(){
    this._cincuentaService.getPosicion().subscribe(data => {
      console.log(data);
      this.listaPosicion = data;
    }, error => {
      console.log(error);
    })
}

}
