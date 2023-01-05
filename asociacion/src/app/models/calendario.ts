export class Calendario {
    id_calendario?: number;
    fecha_partido: Date;
    informacion: string;
    id_local?: number;
    clublocal?: string;
    id_visita?: number;
    clubvisita?: string;


    constructor(id_calendario: number, fecha_partido: Date, informacion: string, id_local: number, clublocal: string,
        id_visita: number, clubvisita: string){
        this.id_calendario= id_calendario;
        this.fecha_partido= fecha_partido;
        this.informacion= informacion;
        this.id_local= id_local;
        this.clublocal= clublocal;
        this.id_visita= id_visita;
        this.clubvisita= clubvisita;

    }
}