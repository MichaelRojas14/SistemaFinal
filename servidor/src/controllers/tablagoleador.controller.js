const { Pool } = require('pg');
const{ response } = require("express");


const config = {
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'asociacion2'
}
const pool = new Pool(config);


//FUNCIONES
const getGoleador = async (req, res) => {
   const response = await  pool.query('SELECT * FROM tabla_goleador INNER JOIN club ON club.id_club = tabla_goleador.id_club ORDER BY total_goles DESC');
   res.status(200).json(response.rows);
};

const getGoleadorbyId = async (req, res) => {
    const id_tabla_goleador = req.params.id_tabla_goleador;
    const response = await pool.query('SELECT * FROM tabla_goleador WHERE id_tabla_goleador = $1', [id_tabla_goleador]);
    res.json(response.rows);
};

const crearGoleador = async (req, res) => {
    const {rut_jugador, total_goles, id_club, nombre_jugador, informacion_goleador }= req.body;

    const response = await pool.query('INSERT INTO tabla_goleador (rut_jugador, total_goles, id_club, nombre_jugador, informacion_goleador) VALUES ($1, $2, $3, $4, $5)', 
    [rut_jugador, total_goles, id_club, nombre_jugador, informacion_goleador]);
    console.log(response);
    res.json({
        message: 'Goleador Creado Satisfactoriamente',
        body: {
            user: {rut_jugador, nombre_jugador}
        }
    })
};

const updateGoleador = async (req, res) => {
    const id_tabla_goleador = req.params.id_tabla_goleador;
    const { rut_jugador, total_goles, id_club, nombre_jugador, informacion_goleador } = req.body;
    const response = await pool.query('UPDATE tabla_goleador SET rut_jugador = $1, total_goles = $2, id_club = $3, nombre_jugador = $4, informacion_goleador = $5 WHERE id_tabla_goleador = $6', 
    [
        rut_jugador,
        total_goles,
        id_club,
        nombre_jugador,
        informacion_goleador,
        id_tabla_goleador

    ]); 
    console.log(response);
    res.json('Goleador Modificado Satisfactoriamente');
}

const deleteGoleador = async (req, res) => {
    const id_tabla_goleador= req.params.id_tabla_goleador;
    const response = await pool.query('DELETE FROM tabla_goleador WHERE id_tabla_goleador = $1', [id_tabla_goleador]);
    console.log(response);
    res.json(`Goleador Eliminado Satisfactoriamente`);
};



module.exports = {
    getGoleador,
    getGoleadorbyId,
    crearGoleador,
    updateGoleador,
    deleteGoleador
};