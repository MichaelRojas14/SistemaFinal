import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Treinta } from 'src/app/models/treinta';
import { treintaService } from 'src/app/services/treinta.service';

@Component({
  selector: 'app-tabla-treinta',
  templateUrl: './tabla-treinta.component.html',
  styleUrls: ['./tabla-treinta.component.css']
})
export class TablaTreintaComponent implements OnInit {
  listaPosicion: Treinta[] = [];

  constructor(private router: Router,
              private _treintaService: treintaService,
              private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.obtenerPosicion();
  }

  obtenerPosicion(){
    this._treintaService.getPosicion().subscribe(data => {
      console.log(data);
      this.listaPosicion = data;
    }, error => {
      console.log(error);
    })
}

}
