import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { Arquero } from 'src/app/models/vallabatida';
import { clubService } from 'src/app/services/club.service';
import { arqueroService } from 'src/app/services/vallabatida';

@Component({
  selector: 'app-ingresar-vallabatida',
  templateUrl: './ingresar-vallabatida.component.html',
  styleUrls: ['./ingresar-vallabatida.component.css']
})
export class IngresarVallabatidaComponent implements OnInit {
  ArqueroForm: FormGroup;
  listaClub: Club[] = [];
  titulo = 'Ingresar Arquero';
  id: string;
  

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _arqueroService: arqueroService,
              private _clubService: clubService,
              private aRouter: ActivatedRoute) { 
    this.ArqueroForm = this.fb.group({
      rut_jugador: ['', Validators.required],
      cant_goles: ['', Validators.required],
      club: ['', Validators.required],
      nombre_jugador: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id_vall_men_batida')!;
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
  
  agregarArquero() {
    const ARQUERO: Arquero ={
      id_vall_men_batida: 0,
      rut_jugador     : this.ArqueroForm.get('rut_jugador')?.value,
      cant_goles      : this.ArqueroForm.get('cant_goles')?.value,
      id_club         : this.ArqueroForm.get('club')?.value,
      nombre_jugador  : this.ArqueroForm.get('nombre_jugador')?.value,
      
    }
    if(this.id !== null){
      //Editar Club
      this._arqueroService.editarArquero(this.id, ARQUERO). subscribe(data =>{
        this.toastr.info('El Arquero fue actualizado con exito','Arquero Actualizado');
        this.router.navigate(['/tabla-valla-batida-admin']);
      }, error => { 
        console.log(error);
        this.ArqueroForm.reset();
      })
    } else {
      //Agregar Club
      console.log(ARQUERO);
    this._arqueroService.guardarArquero(ARQUERO).subscribe(data => {
      this.toastr.success('El Arquero fue ingresado con exito','Arquero Ingresado');
      this.router.navigate(['/tabla-valla-batida-admin']);
    }, error => { 
      console.log(error);
      this.ArqueroForm.reset();
    })
    }
    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo= 'Modificar Arquero';      
      this._arqueroService.obtenerArquero(this.id).subscribe({
        next: (data: any) => {
          this.ArqueroForm.patchValue({
            rut_jugador    : data[0].rut_jugador, 
            cant_goles     : data[0].cant_goles,
            club           : data[0].id_club,
            nombre_jugador : data[0].nombre_jugador 
          })
        }
      })

    }
  }


}
