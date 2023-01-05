import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Goleador } from 'src/app/models/goleador';
import { goleadorService } from 'src/app/services/goleador.service';

@Component({
  selector: 'app-tabla-goleadores',
  templateUrl: './tabla-goleadores.component.html',
  styleUrls: ['./tabla-goleadores.component.css']
})
export class TablaGoleadoresComponent implements OnInit {
  listaGoleador: Goleador[] = [];

  constructor(
    private _goleadorService: goleadorService,
              private toastr: ToastrService,
              private fb:FormBuilder, 
              private Router: RouterModule) 
              { 
                 //this.createPDF();
                 console.log( this.obtenerGoleador());
              }

  ngOnInit(): void {
    this.obtenerGoleador();
  }
  filterGoleador = '';

  obtenerGoleador(){
    this._goleadorService.getGoleador().subscribe(data => {
      console.log(data);
      this.listaGoleador = data;
    }, error => {
      console.log(error);
    })
}

}
