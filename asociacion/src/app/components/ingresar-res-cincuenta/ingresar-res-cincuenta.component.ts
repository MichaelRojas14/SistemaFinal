import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { Partido_Serie } from 'src/app/models/partserie';
import { Serie } from 'src/app/models/serie';
import { clubService } from 'src/app/services/club.service';
import { partserieService } from 'src/app/services/partserie.service';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-ingresar-res-cincuenta',
  templateUrl: './ingresar-res-cincuenta.component.html',
  styleUrls: ['./ingresar-res-cincuenta.component.css']
})
export class IngresarResCincuentaComponent implements OnInit {
  listaClub: Club[] = [];
  listaSerie: Serie[] = [];
  JuvenilForm: FormGroup;
  titulo = "Ingresar Resultado";
  id: string;


  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _clubService: clubService,
              private _partserieService: partserieService,
              private _serieService: serieService,
              private aRouter: ActivatedRoute){

      this.JuvenilForm = this.fb.group({
      fecha           : ['', Validators.required],
      id_local        : ['', Validators.required],
      goles_local     : ['', Validators.required],
      goles_visita    : ['', Validators.required],
      id_visita       : ['', Validators.required],
      id_serie        : ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id_part_serie')!;
  }

  ngOnInit(): void {
    this.esEditar();
    this.obtenerClub();
    this.obtenerSerie();
  }

  obtenerSerie(){
    this._serieService.getSerie().subscribe(data => {
      //console.log(data);
      this.listaSerie = data;
      console.log(this.listaSerie);
    }, error => {
      console.log(error);
    }) 
  }

  obtenerClub(){
    this._clubService.getClub().subscribe(data => {
      //console.log(data);
      this.listaClub = data;
      console.log(this.listaClub);
    }, error => {
      console.log(error);
    })
}

  agregarParSerieJ() {
    const PART_SERIE: Partido_Serie = {
      fecha: this.JuvenilForm.get('fecha')?.value,
      id_local: this.JuvenilForm.get('id_local')?.value,
      goles_local: this.JuvenilForm.get('goles_local')?.value,
      goles_visita: this.JuvenilForm.get('goles_visita')?.value,
      id_visita: this.JuvenilForm.get('id_visita')?.value,
      id_serie: this.JuvenilForm.get('id_serie')?.value,
    }
    if(this.id !== null){
      //EDITAMOS JUGADOR
      console.log('HOLA')
      this._partserieService.updatePartSerie(this.id, PART_SERIE).subscribe({
        next: resp => {
          this.toastr.info('El Resultado Fue Actualizado Con Exito', 'Resultado Actualizado');
          this.router.navigate(['/resultado-juvenil']);
          
          }, 
           error: err =>{
          console.log(err);
          this.JuvenilForm.reset();
        }
      })

    } else {
      //AGREGAMOS JUGADOR
      console.log(PART_SERIE);
      this._partserieService.guardarPartSerie(PART_SERIE).subscribe({
        next: resp => {
        this.toastr.success('El Resultado Fue Registrado Con Exito', 'Resultado Registrado');
        this.router.navigate(['/resultado-juvenil']);
        }, 
         error: err =>{
        console.log(err);
        this.JuvenilForm.reset();
      }
    })
  }

    }
      

  esEditar() {
    if(this.id !== null){
      this.titulo= "Modificar Resultado";
      this._partserieService.obtenerPartSerie(this.id). subscribe(data =>{
        this.JuvenilForm.patchValue({
          fecha             : data[0].fecha,
          id_local          : data[0].id_local,
          goles_local       : data[0].goles_local, 
          goles_visita      : data[0].goles_visita,
          id_visita         : data[0].id_visita,
          id_serie          : data[0].id_serie,
        })
      })
    }
}

}
