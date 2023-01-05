const { Pool } = require('pg');
const {response} = require("express");
const { generarJWTK } = require('../JWT/jwt');
//var bcrypt = require('bcryptjs');

const config = {
       
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'asociacion2'
}
const pool = new Pool (config);


const login = async (req, res = response) => {
    const { usuario, contrasena } = req.body
    try {
        const responses = await pool.query('select * from login WHERE usuario = $1  ', [usuario])

        if (!responses.rows[0]?.usuario){
            return res.status(401).json({
                ok         :false,
                msg  :'usuario incorrecto',
            })
        }
        const response = await pool.query('select * from login WHERE contrasena = $1  ', [contrasena])
        if (!response.rows[0]?.contrasena){
            return res.status(401).json({
                ok         :false,
                msg  :'contraseña incorrecta',
            })
        }

        

        /*const validarcontrasena = (req.body.contrasena, responses.rows[0]?.contrasena, function(err, res){
            console.log(err, ": SS: ", responses.rows[0]?.contrasena, contrasena)
        });
 
        console.log(validarcontrasena)
        if (!validarcontrasena){
            return res.status(401).json({
                ok         :false,
                msg  :'contraseña incorrecta',
            })
        } */
            const token = await generarJWTK(responses.rows[0].id_login,  responses.rows[0].usuario)
            console.log(usuario+"---"+contrasena+"****")
            return res.json({
                ok         :true,
                usuario: responses.rows[0].usuario,
                token
            })
       
    }
    catch (err) {
        console.log("EL ERROR DEL LOGIN ES: ",err)
        res.json(err)
    }
}



/* const revalidarToken = async (req, res = response) => {

 try {
    
 
   const { id_usuarios, nombres_usuario } = req;

   const token = await generarJWTK(id_usuarios, nombres_usuario)
   var aux = id_usuarios ;
   
   const responses = await pool.query('select id_usuarios,rut, nombres_usuario, correo_usuario, fk_id_rol, fk_id_unidad, nombre_unidad, apellidos_usuario from usuarios INNER JOIN unidad ON usuarios.fk_id_unidad = unidad.id_unidad WHERE id_usuarios = $1', [aux])
   console.log(responses.rows, ": AAAAAAA")
    return res.json({
        ok         :true,
        msg: "Renovar",
        id_usuarios: responses.rows[0].id_usuarios,
        rut: responses.rows[0].rut,
        nombres_usuario: responses.rows[0].nombres_usuario,
        apellidos_usuario: responses.rows[0].apellidos_usuario,
        correo_usuario: responses.rows[0].correo_usuario,
        fk_id_rol: responses.rows[0].fk_id_rol,
        fk_id_unidad: responses.rows[0].fk_id_unidad,
        nombre_unidad: responses.rows[0].nombre_unidad,
        token,
        
    })} catch (error) {
        console.log("ERROR DEL RENOVAR TOKEN",error)
          res.status(401).json( {
        ok: true,
        msg: 'Error RENOVAR TOKEN'
    }) 
    } 
    
} */

    
module.exports = {

    login, 
    //revalidarToken
}