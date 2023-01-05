import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Calendario } from 'src/app/models/calendario';
import { Partido_Serie } from 'src/app/models/partserie';
import { calendarioService } from 'src/app/services/calendario.service';
import { clubService } from 'src/app/services/club.service';
import { partserieService } from 'src/app/services/partserie.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-resultado-juvenil',
  templateUrl: './resultado-juvenil.component.html',
  styleUrls: ['./resultado-juvenil.component.css']
})
export class ResultadoJuvenilComponent implements OnInit {
  listaPartSerie: Partido_Serie[] =[];


  constructor(private _calendarioService: calendarioService,
              private _partserieService: partserieService,
              private toastr: ToastrService,
              private fb:FormBuilder, 
              private Router: RouterModule,
              private router: Router,
              private _loginServise: loginService) { }

  ngOnInit(): void {
    this.obtenerPartSerie();
  }
obtenerPartSerie(){
  this._partserieService.getPartSerie().subscribe(data => {
    console.log(data);
    this.listaPartSerie = data;
  }, error => {
    console.log(error);
  })
}
deletePartSerie(id_part_serie: any) {
  this._partserieService.deletePartSerie(id_part_serie).subscribe({
    next: resp => {
    this.toastr.error('El Partido fue eliminado con exito','Partido Eliminado')
    this.obtenerPartSerie();
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
      
      const DATA: any = document.getElementById('htmlResultados');
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
        doc.text('Reporte Resultados', 230, 50);
        docResult.save(`${new Date().toISOString()}_reporte_resultados.pdf`);
      });
    }

}
