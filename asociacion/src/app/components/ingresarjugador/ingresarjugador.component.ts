import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { Jugador } from 'src/app/models/jugador';
import { Serie } from 'src/app/models/serie';
import { clubService } from 'src/app/services/club.service';
import { jugadorService } from 'src/app/services/jugador.service';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-ingresarjugador',
  templateUrl: './ingresarjugador.component.html',
  styleUrls: ['./ingresarjugador.component.css']
})
export class IngresarjugadorComponent implements OnInit {
  listaClub: Club[] = [];
  listaSerie: Serie[] = [];
  JugadorForm: FormGroup;
  titulo = 'Ingresar Jugador';
  rut: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _jugadorService: jugadorService,
              private _clubService: clubService,
              private _serieService: serieService,
              private aRouter: ActivatedRoute) { 
    this.JugadorForm = this.fb.group({
      rut_jugador: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      club:['', Validators.required],
      serie: ['', Validators.required]
    })
    this.rut = this.aRouter.snapshot.paramMap.get('rut_jugador')!;
  }

  ngOnInit(): void {
    this.obtenerClub();
    this.esEditar();
    this.obtenerSerie();
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


  agregarjugador() {
    const JUGADOR: Jugador = {
      rut_jugador: this.JugadorForm.get('rut_jugador')?.value,
      nombres: this.JugadorForm.get('nombres')?.value,
      apellidos: this.JugadorForm.get('apellidos')?.value,
      fecha_nacimiento: this.JugadorForm.get('fecha_nacimiento')?.value,
      id_club: this.JugadorForm.get('club')?.value,
      id_serie: this.JugadorForm.get('serie')?.value,
    }
    if(this.rut !== null){
      //EDITAMOS JUGADOR
      console.log('HOLA')
      this._jugadorService.updateJugador(this.rut, JUGADOR).subscribe({
        next: resp => {
          this.toastr.info('El Jugador Fue Actualizado Con Exito', 'Jugador Actualizado');
          this.router.navigate(['/jugadores']);
          
          }, 
           error: err =>{
          console.log(err);
          this.JugadorForm.reset();
        }
      })

    } else {
      //AGREGAMOS JUGADOR
      console.log(JUGADOR);
      this._jugadorService.agregarJugador(JUGADOR).subscribe({
        next: resp => {
        this.toastr.success('El Jugador Fue Registrado Con Exito', 'Jugador Registrado');
        this.router.navigate(['/jugadores']);
        }, 
         error: err =>{
        console.log(err);
        this.JugadorForm.reset();
      }
    })
  }

    }
      

  esEditar() {
    if(this.rut !== null){
      this.titulo= "Modificar Jugador";
      this._jugadorService.obtenerJugador(this.rut). subscribe(data =>{
        this.JugadorForm.patchValue({
          rut_jugador     : data[0].rut_jugador,
          nombres         : data[0].nombres,
          apellidos       : data[0].apellidos, 
          fecha_nacimiento: data[0].fecha_nacimiento,
          club            : data[0].id_club,
          serie           : data[0].id_serie
        })
      })
    }
  }
}
