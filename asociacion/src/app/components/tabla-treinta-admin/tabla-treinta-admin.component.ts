import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Treinta } from 'src/app/models/treinta';
import { loginService } from 'src/app/services/login.service';
import { treintaService } from 'src/app/services/treinta.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tabla-treinta-admin',
  templateUrl: './tabla-treinta-admin.component.html',
  styleUrls: ['./tabla-treinta-admin.component.css']
})
export class TablaTreintaAdminComponent implements OnInit {
  listaPosicion: Treinta[] = [];

  constructor(private router: Router,
              private _loginServise: loginService,
              private _treintaService: treintaService,
              private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.obtenerPosicion();
  }

  obtenerPosicion(){
    this._treintaService.getPosicion().subscribe(data => {
      console.log(data);
      this.listaPosicion = data;
    }, error => {
      console.log(error);
    })
}

  deletePosicion(id_tabla35: any) {
    this._treintaService.deletePosicion(id_tabla35).subscribe({
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
