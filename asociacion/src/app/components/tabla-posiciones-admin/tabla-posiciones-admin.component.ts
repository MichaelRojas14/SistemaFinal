import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { loginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

import { Posicion } from 'src/app/models/tablaposicion';
import { posicionService } from 'src/app/services/tablaposicion.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tabla-posiciones-admin',
  templateUrl: './tabla-posiciones-admin.component.html',
  styleUrls: ['./tabla-posiciones-admin.component.css']
})
export class TablaPosicionesAdminComponent implements OnInit {
  listaPosicion: Posicion[] = [];

  constructor(private router: Router,
              private _loginServise: loginService,
              private _posicionService: posicionService,
              private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.obtenerPosicion();
  }

  obtenerPosicion(){
    this._posicionService.getPosicion().subscribe(data => {
      console.log(data);
      this.listaPosicion = data;
    }, error => {
      console.log(error);
    })
}

  deletePosicion(id_tabla: any) {
    this._posicionService.deletePosicion(id_tabla).subscribe({
      next: resp => {
      this.toastr.error('El Club fue eliminado con exito','Goleador Eliminado')
      this.obtenerPosicion();
      },
      error: err => {
          console.log(err);
      }
    });
  }
  

 logout() {

    this.router.navigate(['/login']);
  
    this._loginServise.logout();
      }
  
   createPDF(): void {
        // Extraemos el
        
        const DATA: any = document.getElementById('htmlPosiciones');
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
          doc.text('Reporte Tabla de Posiciones', 230, 50);
          docResult.save(`${new Date().toISOString()}_reporte_posiciones.pdf`);
        });
      }
      
      //TABLA DINAMICA
      
  
}
