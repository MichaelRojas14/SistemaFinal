import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { Goleador } from 'src/app/models/goleador';
import { clubService } from 'src/app/services/club.service';
import { goleadorService } from 'src/app/services/goleador.service';

@Component({
  selector: 'app-ingresargoleador',
  templateUrl: './ingresargoleador.component.html',
  styleUrls: ['./ingresargoleador.component.css']
})
export class IngresargoleadorComponent implements OnInit {
  GoleadorForm: FormGroup;
  listaClub: Club[] = [];
  titulo = 'Ingresar Goleador';
  id: string;
  

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _goleadorService: goleadorService,
              private _clubService: clubService,
              private aRouter: ActivatedRoute) { 
    this.GoleadorForm = this.fb.group({
      rut_jugador     : ['', Validators.required],
      total_goles     : ['', Validators.required],
      club            : ['', Validators.required],
      nombre_jugador  : ['', Validators.required],
      informacion_goleador: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id_tabla_goleador')!;
  }

  ngOnInit(): void {
    this.esEditar();
    this.obtenerClub();
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
  
  agregarGoleador() {
    const GOLEADOR: Goleador ={
      rut_jugador         : this.GoleadorForm.get('rut_jugador')?.value,
      total_goles         : this.GoleadorForm.get('total_goles')?.value,
      id_club             : this.GoleadorForm.get('club')?.value,
      nombre_jugador      : this.GoleadorForm.get('nombre_jugador')?.value,
      informacion_goleador: this.GoleadorForm.get('informacion_goleador')?.value
      
    }
    if(this.id !== null){
      //Editar Club
      this._goleadorService.editarGoleador(this.id, GOLEADOR). subscribe(data =>{
        this.toastr.info('El Goleador fue actualizado con exito','Goleador Actualizado');
        this.router.navigate(['/tabla-goleadores-admin']);
      }, error => { 
        console.log(error);
        this.GoleadorForm.reset();
      })
    } else {
      //Agregar Club
      console.log(GOLEADOR);
    this._goleadorService.guardarGoleador(GOLEADOR).subscribe(data => {
      this.toastr.success('El Goleador fue ingresado con exito','Goleador Ingresado');
      this.router.navigate(['/tabla-goleadores-admin']);
    }, error => { 
      console.log(error);
      this.GoleadorForm.reset();
    })
    }
    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo= 'Modificar Goleador';      
      this._goleadorService.obtenerGoleador(this.id).subscribe({
        next: (data: any) => {
          this.GoleadorForm.patchValue({
            rut_jugador             : data[0].rut_jugador, 
            total_goles             : data[0].total_goles,
            club                    : data[0].id_club,
            nombre_jugador          : data[0].nombre_jugador,
            informacion_goleador    : data[0].informacion_goleador 
          })
        }
      })

    }
  }

}
