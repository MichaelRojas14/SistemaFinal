import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { Cuarenta } from 'src/app/models/cuarenta';
import { Primera } from 'src/app/models/primera';
import { Serie } from 'src/app/models/serie';
import { clubService } from 'src/app/services/club.service';
import { cuarentaService } from 'src/app/services/cuarenta.service';
import { primeraService } from 'src/app/services/primera.service';
import { serieService } from 'src/app/services/serie.service';


@Component({
  selector: 'app-ingresar-poscuarenta',
  templateUrl: './ingresar-poscuarenta.component.html',
  styleUrls: ['./ingresar-poscuarenta.component.css']
})
export class IngresarPoscuarentaComponent implements OnInit {
  PosicionForm: FormGroup;
  listaClub: Club[] = [];
  listaSerie: Serie[] = [];
  titulo = 'Ingresar Club a Tabla de Posiciones';
  id: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _cuarentaService: cuarentaService,
    private _clubService: clubService,
    private _serieService: serieService,
    private aRouter: ActivatedRoute) 
    { 
      this.PosicionForm = this.fb.group({
        club: ['', Validators.required],
        part_jugado: ['', Validators.required],
        part_ganado: ['', Validators.required],
        part_empatado: ['', Validators.required],
        part_perdido: ['', Validators.required],
        puntos: ['', Validators.required],
        serie: ['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id_tabla45')!;
    }

  ngOnInit(): void {
    this.obtenerClub();
    this.obtenerSerie();
    this.esEditar();
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
    obtenerSerie(){
      this._serieService.getSerie().subscribe(data => {
        //console.log(data);
        this.listaSerie = data;
        console.log(this.listaSerie);
      }, error => {
        console.log(error);
      })
}
  
  agregarPosicion() {
    const CUARENTA: Cuarenta ={
      id_club: this.PosicionForm.get('club')?.value,
      part_jugado: this.PosicionForm.get('part_jugado')?.value,
      part_ganado: this.PosicionForm.get('part_ganado')?.value,
      part_empatado: this.PosicionForm.get('part_empatado')?.value,
      part_perdido: this.PosicionForm.get('part_perdido')?.value,
      puntos: this.PosicionForm.get('puntos')?.value,
      id_serie: this.PosicionForm.get('serie')?.value,
    }
    if(this.id !== null){
      //Editar Club
      this._cuarentaService.editarPosicion(this.id, CUARENTA). subscribe(data =>{
        this.toastr.info('La Posicion fue actualizada con exito','Posicion Actualizado');
        this.router.navigate(['/tabla-cuarenta-admin']);
      }, error => { 
        console.log(error);
        this.PosicionForm.reset();
      })
    } else {
      //Agregar Club
      console.log(CUARENTA);
    this._cuarentaService.guardarPosicion(CUARENTA).subscribe(data => {
      this.toastr.success('El Club fue ingresado con exito a La Tabla de Posiciones','Club Ingresado');
      this.router.navigate(['/tabla-cuarenta-admin']);
    }, error => { 
      console.log(error);
      this.PosicionForm.reset();
    })
    }
    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo= 'Actualizador de Puntos';      
      this._cuarentaService.obtenerPosicion(this.id).subscribe({
        next: (data: any) => {
          this.PosicionForm.patchValue({
            club           : data[0].id_club, 
            part_jugado    : data[0].part_jugado,
            part_ganado    : data[0].part_ganado,
            part_empatado  : data[0].part_empatado,
            part_perdido   : data[0].part_perdido,
            puntos         : data[0].puntos,
            serie          : data[0].id_serie
          })
        }
      })

    }
  }

}
