import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { clubService } from 'src/app/services/club.service';


@Component({
  selector: 'app-ingresarclub',
  templateUrl: './ingresarclub.component.html',
  styleUrls: ['./ingresarclub.component.css']
})
export class IngresarclubComponent implements OnInit {
  ClubForm: FormGroup;
  titulo = 'Ingresar Club';
  id: string;
  

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _clubService: clubService,
              private aRouter: ActivatedRoute) { 
    this.ClubForm = this.fb.group({
      nombre_club: ['', Validators.required],
      fecha_fundacion: ['', Validators.required],
      ubicacion: ['', Validators.required],
      informacion: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id_club')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }
  
  agregarClub() {
    const CLUB: Club ={
      id_club: 0,
      nombre_club: this.ClubForm.get('nombre_club')?.value,
      fecha_fundacion: this.ClubForm.get('fecha_fundacion')?.value,
      ubicacion: this.ClubForm.get('ubicacion')?.value,
      informacion: this.ClubForm.get('informacion')?.value,
      
    }
    if(this.id !== null){
      //Editar Club
      this._clubService.editarClub(this.id, CLUB). subscribe(data =>{
        this.toastr.info('El club fue actualizado con exito','Club Actualizado');
        this.router.navigate(['/clubes']);
      }, error => { 
        console.log(error);
        this.ClubForm.reset();
      })
    } else {
      //Agregar Club
      console.log(CLUB);
    this._clubService.guardarClub(CLUB).subscribe(data => {
      this.toastr.success('El club fue ingresado con exito','Club Ingresado');
      this.router.navigate(['/clubes']);
    }, error => { 
      console.log(error);
      this.ClubForm.reset();
    })
    }
    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo= 'Modificar Club';      
      this._clubService.obtenerClub(this.id).subscribe({
        next: (data: any) => {
          //this.fecha_f  = data[0].fecha_fundacion;
          this.ClubForm.patchValue({
            nombre_club    : data[0].nombre_club,
            fecha_fundacion: data[0].fecha_fundacion,
            ubicacion      : data[0].ubicacion,
            informacion    : data[0].informacion
          })
        }
      })

    }
  }
  
}
  