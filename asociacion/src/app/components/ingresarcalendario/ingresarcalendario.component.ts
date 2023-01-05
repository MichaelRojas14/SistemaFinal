import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Calendario } from 'src/app/models/calendario';
import { Club } from 'src/app/models/club';
import { calendarioService } from 'src/app/services/calendario.service';
import { clubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-ingresarcalendario',
  templateUrl: './ingresarcalendario.component.html',
  styleUrls: ['./ingresarcalendario.component.css']
})
export class IngresarcalendarioComponent implements OnInit {
  listaClub: Club[] = [];
  CalendarioForm: FormGroup;
  titulo = "Ingresar Calendario";
  id: string;


  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _clubService: clubService,
              private _calendarioService: calendarioService,
              private aRouter: ActivatedRoute){

      this.CalendarioForm = this.fb.group({
      fecha_partido: ['', Validators.required],
      informacion  : ['', Validators.required],
      clublocal     : ['', Validators.required],
      clubvisita    : ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id_calendario')!;
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

  agregarcalendario() {
    const CALENDARIO: Calendario = {
      fecha_partido: this.CalendarioForm.get('fecha_partido')?.value,
      informacion: this.CalendarioForm.get('informacion')?.value,
      id_local: this.CalendarioForm.get('clublocal')?.value,
      id_visita: this.CalendarioForm.get('clubvisita')?.value,
    }
    if(this.id !== null){
      //EDITAMOS JUGADOR
      console.log('HOLA')
      this._calendarioService.updateCalendario(this.id, CALENDARIO).subscribe({
        next: resp => {
          this.toastr.info('El Calendario Fue Actualizado Con Exito', 'Calendario Actualizado');
          this.router.navigate(['/calendario-admin']);
          
          }, 
           error: err =>{
          console.log(err);
          this.CalendarioForm.reset();
        }
      })

    } else {
      //AGREGAMOS JUGADOR
      console.log(CALENDARIO);
      this._calendarioService.agregarCalendario(CALENDARIO).subscribe({
        next: resp => {
        this.toastr.success('El Calendario Fue Registrado Con Exito', 'Calendario Registrado');
        this.router.navigate(['/calendario-admin']);
        }, 
         error: err =>{
        console.log(err);
        this.CalendarioForm.reset();
      }
    })
  }

    }
      

  esEditar() {
    if(this.id !== null){
      this.titulo= "Modificar Calendario";
      this._calendarioService.obtenerCalendario(this.id). subscribe(data =>{
        this.CalendarioForm.patchValue({
          fecha_partido     : data[0].fecha_partido,
          informacion       : data[0].informacion, 
          clublocal          : data[0].id_local,
          clubvisita         : data[0].id_visita
        })
      })
    }
}
}
