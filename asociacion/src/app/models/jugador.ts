export class Jugador {
    rut_jugador: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: Date;
    id_club: number;
    nombre_club?: string;
    id_serie: number;
    nombre_serie?: string;
    static rut_jugador: any;

    constructor(rut_jugador: string, nombres: string, apellidos: string, fecha_nacimiento: Date, id_club: number, nombre_club: string, id_serie: number, nombre_serie: string){
        this.rut_jugador= rut_jugador;
        this.nombres= nombres;
        this.apellidos= apellidos;
        this.fecha_nacimiento= fecha_nacimiento;
        this.id_club= id_club;
        this.nombre_club= nombre_club;
        this.id_serie= id_serie;
        this.nombre_serie= nombre_serie;
    }
}
