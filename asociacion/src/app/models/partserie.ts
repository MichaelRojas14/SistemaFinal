export class Partido_Serie {
    id_part_serie?: number;
    fecha: string;
    goles_local: number;
    goles_visita: number;
    id_serie: number;
    serie?: string;
    id_local: number;
    clublocal?: string;
    id_visita: number;
    clubvisita?: string;

    constructor(id_part_serie: number, fecha: string, goles_local: number, goles_visita: number, id_serie: number, serie: string, id_local: number, clublocal: string, id_visita: number, clubvisita: string){
        this.id_part_serie= id_part_serie;
        this.fecha= fecha;
        this.goles_local= goles_local;
        this.goles_visita= goles_visita;
        this.id_serie= id_serie;
        this.serie= serie;
        this.id_local= id_local;
        this.clublocal= clublocal;
        this.id_visita= id_visita;
        this.clubvisita= clubvisita;
    }
}