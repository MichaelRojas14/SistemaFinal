import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Calendario } from 'src/app/models/calendario';
import { Club } from 'src/app/models/club';
import { calendarioService } from 'src/app/services/calendario.service';
import { clubService } from 'src/app/services/club.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-calendario-admin',
  templateUrl: './calendario-admin.component.html',
  styleUrls: ['./calendario-admin.component.css']
})
export class CalendarioAdminComponent implements OnInit {
  listaCalendario: Calendario[] = [];
  listaClub: Club[] = [];

  constructor(private _calendarioService: calendarioService,
              private _clubService: clubService,
              private toastr: ToastrService,
              private fb:FormBuilder, 
              private Router: RouterModule, 
              private router: Router,
              private _loginServise: loginService
  ) { }

  ngOnInit(): void {
    this.obtenerCalendario();
    this.obtenerClub();
  }
  
  obtenerClub(){
    this._clubService.getClub().subscribe(data => {
      console.log(data);
      this.listaClub = data;
    }, error => {
      console.log(error);
    })
}

  obtenerCalendario(){
    this._calendarioService.getCalendario().subscribe(data => {
      console.log(data);
      this.listaCalendario = data;
    }, error => {
      console.log(error);
    })
}
  deleteCalendario(id_calendario: any) {
  this._calendarioService.deleteCalendario(id_calendario).subscribe({
    next: resp => {
    this.toastr.error('La Fecha fue eliminada con exito','Fecha Eliminada')
    this.obtenerCalendario();
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
      
      const DATA: any = document.getElementById('htmlCalendario');
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
        doc.text('Reporte Calendario', 230, 50);
        docResult.save(`${new Date().toISOString()}_reporte_calendario.pdf`);
      });
    }

}
