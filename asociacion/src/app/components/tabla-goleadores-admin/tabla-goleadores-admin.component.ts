import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Goleador } from 'src/app/models/goleador';
import { goleadorService } from 'src/app/services/goleador.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-tabla-goleadores-admin',
  templateUrl: './tabla-goleadores-admin.component.html',
  styleUrls: ['./tabla-goleadores-admin.component.css']
})
export class TablaGoleadoresAdminComponent implements OnInit {
  listaGoleador: Goleador[] = [];
  //SuspensionForm: any;

  constructor(
    private _goleadorService: goleadorService,
              private toastr: ToastrService,
              private fb:FormBuilder, 
              private Router: RouterModule,
              private router: Router,
              private _loginServise: loginService) 
              { 
                 //this.createPDF();
                 console.log( this.obtenerGoleador());
              }

  ngOnInit(): void {
    this.obtenerGoleador();
  }
  filterGoleador = '';

  obtenerGoleador(){
    this._goleadorService.getGoleador().subscribe(data => {
      console.log(data);
      this.listaGoleador = data;
    }, error => {
      console.log(error);
    })
}

  deleteGoleador(id_tabla_goleador: any) {
    this._goleadorService.deleteGoleador(id_tabla_goleador).subscribe({
      next: resp => {
      this.toastr.error('El Goleador fue eliminado con exito','Goleador Eliminado')
      this.obtenerGoleador();
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
        
        const DATA: any = document.getElementById('htmlGoleador');
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
          doc.text('Reporte Goleador', 230, 50);
          docResult.save(`${new Date().toISOString()}_reporte_goleador.pdf`);
        });
      }
  

}
