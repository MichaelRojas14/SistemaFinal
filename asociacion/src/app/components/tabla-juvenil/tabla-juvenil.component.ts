import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Juvenil } from 'src/app/models/juvenil';
import { juvenilService } from 'src/app/services/juvenil.service';

@Component({
  selector: 'app-tabla-juvenil',
  templateUrl: './tabla-juvenil.component.html',
  styleUrls: ['./tabla-juvenil.component.css']
})
export class TablaJuvenilComponent implements OnInit {
  listaPosicion: Juvenil[] = [];

  constructor( private router: Router,
               private _juvenilService: juvenilService,
               private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.obtenerPosicion();
  }

  obtenerPosicion(){
    this._juvenilService.getPosicion().subscribe(data => {
      console.log(data);
      this.listaPosicion = data;
    }, error => {
      console.log(error);
    })
}

}
