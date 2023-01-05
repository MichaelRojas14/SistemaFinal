import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { loginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  FormularioLogin!: FormGroup;

  constructor(private router: Router, 
              private _loginServise: loginService,
              private fb: FormBuilder,
              private activatedRouter: ActivatedRoute) {

    this.FormularioLogin = this.fb.group({

      usuario: [, [Validators.required, Validators.minLength(3)]],
      contrasena: [, [Validators.required, Validators.minLength(3)]],

    });

  }
  
  ngOnInit(): void {
  }

  login() {

      this._loginServise.login(this.FormularioLogin.value).subscribe(
          {
            next: (ok: any) => {
            //  console.log("La respuesta del login es: ", ok)
    
              if (ok.ok  == true ){
                
                this.router.navigate(['/inicio-admin'])
                Swal.fire('EXITO', "Usuario Y Contraseña Correctos", 'success')
    
              }
              if (ok.ok  == undefined || ok.ok  == false){
               // console.log("La respuesta del login es: ", ok)
                Swal.fire('Error', ok, 'error');
              }
    
        }, error: error => {
          Swal.fire('Error', error.msg , 'error');
         // console.log("EL ERROR DEL LOGIN ES: ", error)
         // console.log(error.msg) 
        }
    
        })
      }
    
    
}


