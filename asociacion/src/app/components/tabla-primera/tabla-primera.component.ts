import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Primera } from 'src/app/models/primera';
import { primeraService } from 'src/app/services/primera.service';

@Component({
  selector: 'app-tabla-primera',
  templateUrl: './tabla-primera.component.html',
  styleUrls: ['./tabla-primera.component.css']
})
export class TablaPrimeraComponent implements OnInit {
  listaPosicion: Primera[] = [];

  constructor(private router: Router,
              private _primeraService: primeraService,
              private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.obtenerPosicion();
  }

  obtenerPosicion(){
    this._primeraService.getPosicion().subscribe(data => {
      console.log(data);
      this.listaPosicion = data;
    }, error => {
      console.log(error);
    })
}

}
