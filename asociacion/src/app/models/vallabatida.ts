export class Arquero {
    id_vall_men_batida?: number;
    cant_goles: number;
    rut_jugador: string;
    id_club: number;
    nombre_club?: string;
    nombre_jugador: string;

    constructor(id_vall_men_batida: number, cant_goles: number, rut_jugador: string, id_club: number, nombre_club: string, nombre_jugador: string){
        this.id_vall_men_batida= id_vall_men_batida;
        this.cant_goles= cant_goles;
        this.rut_jugador= rut_jugador;
        this.id_club= id_club;
        this.nombre_club= nombre_club;
        this.nombre_jugador= nombre_jugador;
    }
}