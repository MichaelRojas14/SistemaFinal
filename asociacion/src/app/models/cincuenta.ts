export class Cincuenta {
    id_tabla50?: number;
    id_club?: number;
    nombre_club?: string;
    part_jugado: number;
    part_ganado: number;
    part_empatado: number;
    part_perdido: number;
    puntos: number;
    id_serie?: number;
    nombre_serie?: string;

    constructor(id_tabla50: number, id_club: number, nombre_club: string, 
                part_jugado: number, part_ganado: number, part_empatado: number,
                part_perdido: number, puntos: number, id_serie: number, nombre_serie: string){

        this.id_tabla50   = id_tabla50;
        this.id_club    = id_club;
        this.nombre_club= nombre_club;
        this.part_jugado= part_jugado;
        this.part_ganado= part_ganado;
        this.part_empatado= part_empatado;
        this.part_perdido= part_perdido;
        this.puntos = puntos;
        this.id_serie = id_serie;
        this.nombre_serie= nombre_serie;



        
    }
}