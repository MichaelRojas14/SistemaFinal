import { Component, OnInit } from '@angular/core';
import { Cincuenta } from 'src/app/models/cincuenta';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { loginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { juvenilService } from 'src/app/services/juvenil.service';
import { Juvenil } from 'src/app/models/juvenil';
import { cincuentaService } from 'src/app/services/cincuenta.service';

@Component({
  selector: 'app-tabla-cincuenta-admin',
  templateUrl: './tabla-cincuenta-admin.component.html',
  styleUrls: ['./tabla-cincuenta-admin.component.css']
})
export class TablaCincuentaAdminComponent implements OnInit {
  listaPosicion: Cincuenta[] = [];

  constructor( private router: Router,
               private _loginServise: loginService,
               private _cincuentaService: cincuentaService,
               private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.obtenerPosicion();
  }

  obtenerPosicion(){
    this._cincuentaService.getPosicion().subscribe(data => {
      console.log(data);
      this.listaPosicion = data;
    }, error => {
      console.log(error);
    })
}

  deletePosicion(id_tabla: any) {
    this._cincuentaService.deletePosicion(id_tabla).subscribe({
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
