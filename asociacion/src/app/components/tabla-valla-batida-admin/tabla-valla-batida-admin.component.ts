import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Arquero } from 'src/app/models/vallabatida';
import { arqueroService } from 'src/app/services/vallabatida';
import  jsPDF  from 'jspdf';
import html2canvas  from 'html2canvas';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-tabla-valla-batida-admin',
  templateUrl: './tabla-valla-batida-admin.component.html',
  styleUrls: ['./tabla-valla-batida-admin.component.css']
})
export class TablaVallaBatidaAdminComponent implements OnInit {
  listaArquero: Arquero[] = [];
  //SuspensionForm: any;

  constructor(
    private _arqueroService: arqueroService,
              private toastr: ToastrService,
              private fb:FormBuilder, 
              private Router: RouterModule,
              private router: Router,
              private _loginServise: loginService
  ) { }

  ngOnInit(): void {
    this.obtenerArquero();
  }
  filterArquero = '';

  obtenerArquero(){
    this._arqueroService.getArquero().subscribe(data => {
      console.log(data);
      this.listaArquero = data;
    }, error => {
      console.log(error);
    })
}

  deleteArquero(id_vall_men_batida: any) {
    this._arqueroService.deleteArquero(id_vall_men_batida).subscribe({
      next: resp => {
      this.toastr.error('El Arquero fue eliminado con exito','Arquero Eliminado')
      this.obtenerArquero();
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
        
        const DATA: any = document.getElementById('htmlValla-Batida');
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
          doc.text('Reporte Valla Menos Batida', 230, 50);
          docResult.save(`${new Date().toISOString()}_reporte_valla_menos_batida.pdf`);
        });
      }
  
}
