import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { loginService } from 'src/app/services/login.service';
import { primeraService } from 'src/app/services/primera.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Cuarenta } from 'src/app/models/cuarenta';
import { cuarentaService } from 'src/app/services/cuarenta.service';

@Component({
  selector: 'app-tabla-cuarenta-admin',
  templateUrl: './tabla-cuarenta-admin.component.html',
  styleUrls: ['./tabla-cuarenta-admin.component.css']
})
export class TablaCuarentaAdminComponent implements OnInit {
  listaPosicion: Cuarenta[] = [];

  constructor(private router: Router,
              private _loginServise: loginService,
              private _cuarentaService: cuarentaService,
              private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.obtenerPosicion();
  }

  obtenerPosicion(){
    this._cuarentaService.getPosicion().subscribe(data => {
      console.log(data);
      this.listaPosicion = data;
    }, error => {
      console.log(error);
    })
}

  deletePosicion(id_tabla45: any) {
    this._cuarentaService.deletePosicion(id_tabla45).subscribe({
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
}
