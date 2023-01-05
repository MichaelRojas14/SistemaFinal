export class Suspension {
    id_suspension?: number;
    fechas_suspension: number;
    id_club: number;
    nombre_club?: string;
    rut_jugador: string;
    fecha: Date

    constructor( id_suspension: number, fechas_suspension: number, id_club: number, nombre_club:string, rut_jugador: string, fecha: Date){
        this.id_suspension= id_suspension;
        this.fechas_suspension= fechas_suspension;
        this.id_club= id_club;
        this.nombre_club= nombre_club;
        this.rut_jugador= rut_jugador;
        this.fecha= fecha;

    }
}