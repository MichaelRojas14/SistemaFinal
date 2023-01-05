import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { clubService } from 'src/app/services/club.service';
import { loginService } from 'src/app/services/login.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {
  listaClub: Club[] = [];

  constructor(private _clubService: clubService,
              private toastr: ToastrService,
              private fb:FormBuilder, 
              private Router: RouterModule,
              private router: Router,
              private _loginServise: loginService) {}

  ngOnInit(): void {
    this.obtenerClub();
  }
  filterClub = '';
  
  obtenerClub(){
    this._clubService.getClub().subscribe(data => {
      console.log(data);
      this.listaClub = data;
    }, error => {
      console.log(error);
    })
}

  deleteClub(id: any) {
    this._clubService.deleteClub(id).subscribe(data =>{
      this.toastr.error('El Club fue eliminado con exito','Club Eliminado');
      this.obtenerClub();
    }, error =>{
      console.error(error);
    })
  }
  
  logout() {

    this.router.navigate(['/login']);

    this._loginServise.logout();
      }

  createPDF(): void {
        // Extraemos el
        
        const DATA: any = document.getElementById('htmlClubes');
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
          doc.text('Reporte Club', 230, 50);
          docResult.save(`${new Date().toISOString()}_reporte_club.pdf`);
        });
      }

}
