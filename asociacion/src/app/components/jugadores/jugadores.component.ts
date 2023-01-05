import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Jugador } from 'src/app/models/jugador';
import { jugadorService } from 'src/app/services/jugador.service';
import  jsPDF  from 'jspdf';
import html2canvas from 'html2canvas';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  listaJugador: Jugador[] = [];
  JugadorForm: any;
 

  constructor(
              private _jugadorService: jugadorService,
              private toastr: ToastrService,
              private fb:FormBuilder, 
              private router: Router,
              private _loginServise: loginService
              ){ 
                //this.createPDF();
                console.log( this.obtenerJugadores());
              }
              
  ngOnInit(): void {
    this.obtenerJugadores();
  }
  filterJugador = '';
  
  obtenerJugadores(){
    this._jugadorService.getJugador().subscribe(data => { 
      this.listaJugador = data;
      console.log(this.listaJugador);
    }, error => {
      console.log(error);
    })
}

  deleteJugador(rut: any) {
    this._jugadorService.deleteJugador(rut).subscribe({
      next: resp => {
      this.toastr.error('El jugador fue eliminado con exito','Jugador Eliminado')
      this.obtenerJugadores();
      },
      error: err => {
          console.log(err);
      }
    });
  }
  
  createPDF(): void {
    // Extraemos el
    
    const DATA: any = document.getElementById('htmlJugador');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 10;
      const bufferY = 80;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      //LOGO
      var logo = new Image();
      logo.src = 'https://i.postimg.cc/bYxXJMMk/logo.jpg';
      doc.addImage(logo, 'JPEG', 10, 30,50,50);

      //TITULO
      doc.text('Reporte Jugadores', 230, 50);
      docResult.save(`${new Date().toISOString()}_reporte_jugadores.pdf`);
    });
  }

  logout() {

    this.router.navigate(['/login']);

    this._loginServise.logout();
      }

  }
