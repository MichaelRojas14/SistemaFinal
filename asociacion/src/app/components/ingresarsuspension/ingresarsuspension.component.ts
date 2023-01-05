import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { Suspension } from 'src/app/models/suspension';
import { clubService } from 'src/app/services/club.service';
import { jugadorService } from 'src/app/services/jugador.service';
import { suspensionService } from 'src/app/services/suspension.service';

@Component({
  selector: 'app-ingresarsuspension',
  templateUrl: './ingresarsuspension.component.html',
  styleUrls: ['./ingresarsuspension.component.css']
})
export class IngresarsuspensionComponent implements OnInit {
  SuspensionForm: FormGroup;
  listaClub: Club[] = [];
  titulo = 'Ingresar Suspension';
  id!: string;
  

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _suspensionService: suspensionService,
              private _clubService: clubService,
              private aRouter: ActivatedRoute) { 
    this.SuspensionForm = this.fb.group({
      fechas_suspension: ['', Validators.required],
      club: ['', Validators.required],
      rut_jugador: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id_suspension')!;
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

  agregarSuspension() {
    const SUSPENSION: Suspension ={
      fechas_suspension: this.SuspensionForm.get('fechas_suspension')?.value,
      id_club: this.SuspensionForm.get('club')?.value,
      rut_jugador: this.SuspensionForm.get('rut_jugador')?.value,
      fecha: new Date()
    }
    if(this.id !== null){
      //Editar Club
      this._suspensionService.editarSuspension(this.id, SUSPENSION). subscribe(data =>{
        this.toastr.info('La Suspension fue actualizada con exito','Suspension Actualizada');
        this.router.navigate(['/suspensiones-jugador']);
      }, error => { 
        console.log(error);
        this.SuspensionForm.reset();
      })
    } else {
      //Agregar Club
      console.log(SUSPENSION);
    this._suspensionService.guardarSuspension(SUSPENSION).subscribe(data => {
      this.toastr.success('La Suspension fue ingresada con exito','Suspension Ingresada');
      this.router.navigate(['/suspensiones-jugador']);
    }, error => { 
      console.log(error);
      this.SuspensionForm.reset();
    })
    }
  }

  esEditar(){
    if(this.id !== null){
      this.titulo= 'Modificar Suspension';
      this._suspensionService.obtenerSuspension(this.id).subscribe({
        next: (data: any) => {
          this.SuspensionForm.patchValue({
            fechas_suspension: data[0].fechas_suspension,
            club             : data[0].id_club ,
            rut_jugador      : data[0].rut_jugador, 
          })
        }
      })

    }
  }
}

