export class Login {
    id_login?: number;
    usuario: string;
    contrasena: string;

    constructor(id_login: number, usuario: string, contrasena: string, informacion: string){
        this.id_login= id_login;
        this.usuario= usuario;
        this.contrasena= contrasena;
    }
}