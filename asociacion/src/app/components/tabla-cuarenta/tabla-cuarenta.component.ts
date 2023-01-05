import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cuarenta } from 'src/app/models/cuarenta';
import { cuarentaService } from 'src/app/services/cuarenta.service';

@Component({
  selector: 'app-tabla-cuarenta',
  templateUrl: './tabla-cuarenta.component.html',
  styleUrls: ['./tabla-cuarenta.component.css']
})
export class TablaCuarentaComponent implements OnInit {
  listaPosicion: Cuarenta[] = [];

  constructor(private router: Router,
              private _cuarentaService: cuarentaService,
              private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.obtenerPosicion();
  }

  obtenerPosicion(){
    this._cuarentaService.getPosicion().subscribe(data => {
      console.log(data);
      this.listaPosicion = data;
    }, error => {
      console.log(error);
    })
}

}
