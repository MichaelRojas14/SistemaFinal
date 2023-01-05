export class Serie {
    id_serie?: number;
    nombre_serie?: string;
    informacion: string;

    constructor(id_serie: number, nombre_serie: string,  informacion: string){
        this.id_serie= id_serie;
        this.nombre_serie= nombre_serie;
        this.informacion= informacion;
    }
}