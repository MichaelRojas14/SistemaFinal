export class Goleador {
    id_tabla_goleador?: number;
    rut_jugador: string;
    total_goles: number;
    id_club: number;
    nombre_club?: string;
    nombre_jugador: string;
    informacion_goleador: string;

    constructor(id_tabla_goleador: number, rut_jugador: string, total_goles: number, 
                id_club: number, nombrer_club: string, nombre_jugador: string,
                informacion_goleador: string){
        this.id_tabla_goleador= id_tabla_goleador;
        this.rut_jugador= rut_jugador;
        this.total_goles= total_goles;
        this.id_club= id_club;
        this.nombre_club= nombrer_club;
        this.nombre_jugador= nombre_jugador;
        this.informacion_goleador= informacion_goleador;
    }
}