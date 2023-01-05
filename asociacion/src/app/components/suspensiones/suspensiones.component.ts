import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Suspension } from 'src/app/models/suspension';
import { loginService } from 'src/app/services/login.service';
import { suspensionService } from 'src/app/services/suspension.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-suspensiones',
  templateUrl: './suspensiones.component.html',
  styleUrls: ['./suspensiones.component.css']
})
export class SuspensionesComponent implements OnInit {
  listaSuspension: Suspension[] = [];
  SuspensionForm: any;

  constructor(
    private _suspensionService: suspensionService,
              private toastr: ToastrService,
              private fb:FormBuilder, 
              private Router: RouterModule,
              private router: Router,
              private _loginServise: loginService
  ) { }

  ngOnInit(): void {
    this.obtenerSuspension();
  }
  filterSuspension = '';
  obtenerSuspension(){
    this._suspensionService.getSuspension().subscribe(data => {
      console.log(data);
      this.listaSuspension = data;
    }, error => {
      console.log(error);
    })
}

  deleteSuspension(id_suspension: any) {
    this._suspensionService.deleteSuspension(id_suspension).subscribe({
      next: resp => {
      this.toastr.error('La Suspension fue eliminada con exito','Suspension Eliminada')
      this.obtenerSuspension();
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
        
        const DATA: any = document.getElementById('htmlSuspension');
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
          doc.text('Reporte Suspension', 230, 50);
          docResult.save(`${new Date().toISOString()}_reporte_suspension.pdf`);
        });
      }

}
