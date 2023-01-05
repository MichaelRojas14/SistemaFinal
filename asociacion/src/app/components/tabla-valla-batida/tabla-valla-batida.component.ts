import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Arquero } from 'src/app/models/vallabatida';
import { arqueroService } from 'src/app/services/vallabatida';

@Component({
  selector: 'app-tabla-valla-batida',
  templateUrl: './tabla-valla-batida.component.html',
  styleUrls: ['./tabla-valla-batida.component.css']
})
export class TablaVallaBatidaComponent implements OnInit {
  listaArquero: Arquero[] = [];
  //SuspensionForm: any;

  constructor(
    private _arqueroService: arqueroService,
              private toastr: ToastrService,
              private fb:FormBuilder, 
              private Router: RouterModule,
  ) { }

  ngOnInit(): void {
    this.obtenerArquero();
  }
  filterArquero = '';

  obtenerArquero(){
    this._arqueroService.getArquero().subscribe(data => {
      console.log(data);
      this.listaArquero = data;
    }, error => {
      console.log(error);
    })
}

}
