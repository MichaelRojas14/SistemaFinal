import { Component, OnInit } from '@angular/core';
import { Calendario } from 'src/app/models/calendario';
import { Club } from 'src/app/models/club';
import { calendarioService } from 'src/app/services/calendario.service';
import { clubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  listaCalendario: Calendario[] = [];
  listaClub: Club[] = [];

  constructor(  private _calendarioService: calendarioService,
                private _clubService: clubService

  ) { }

  ngOnInit(): void {
    this.obtenerCalendario();
    this.obtenerClub();
  }
  
  obtenerClub(){
    this._clubService.getClub().subscribe(data => {
      console.log(data);
      this.listaClub = data;
    }, error => {
      console.log(error);
    })
}

  obtenerCalendario(){
    this._calendarioService.getCalendario().subscribe(data => {
      console.log(data);
      this.listaCalendario = data;
    }, error => {
      console.log(error);
    })
}
}
