import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { clubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  listaClub: Club[] = [];

  constructor(private _clubService: clubService,
    private toastr: ToastrService,
    private fb:FormBuilder, 
    private Router: RouterModule) {}

  ngOnInit(): void {
    this.obtenerJugadores();
  }
  obtenerJugadores(){
    this._clubService.getClub().subscribe(data => {
      console.log(data);
      this.listaClub = data;
    }, error => {
      console.log(error);
    })
}


}

