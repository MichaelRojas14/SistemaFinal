export class Club {
    id_club: number;
    nombre_club: string;
    fecha_fundacion: Date;
    ubicacion: string;
    informacion: string;
    static nombre: any;

    constructor(id_club: number, nombre_club: string, fecha_fundacion: Date, ubicacion: string, informacion: string){
        this.id_club= id_club;
        this.nombre_club= nombre_club;
        this.fecha_fundacion= fecha_fundacion;
        this.ubicacion= ubicacion;
        this.informacion= informacion;
    }
}