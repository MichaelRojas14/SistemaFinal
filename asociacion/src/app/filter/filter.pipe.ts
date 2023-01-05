import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterDato'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    //JUGADOR
    const resultDato = [];
    for(const Dato of value){
      if(Dato.rut_jugador.indexOf(arg) >= 0){
         resultDato.push(Dato);
      } /*else{
        if(Dato.nombres.toLowerCase().indexOf(arg.toLowerCase()) >= 0){
          resultDato.push(Dato);
        }
        else{
          if(Dato.apellidos.toLowerCase().indexOf(arg.toLowerCase()) >= 0){
            resultDato.push(Dato);
          }
        }           
      };*/
      
    };
    return resultDato;    
  }

}

