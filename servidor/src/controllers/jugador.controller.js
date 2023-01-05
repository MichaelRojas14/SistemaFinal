const { Pool } = require('pg');
const{ response } = require("express");


const config = {
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'asociacion2'
}
const pool = new Pool(config);


//CONSULTAS
const getJugador = async (req, res) => {
   const response = await  pool.query('SELECT * FROM jugador INNER JOIN club ON club.id_club = jugador.id_club INNER JOIN serie ON serie.id_serie = jugador.id_serie');
   res.status(200).json(response.rows); 
};

const getJugadorbyRut = async (req, res) => {
    const rut_jugador = req.params.rut_jugador;
    const response = await pool.query('SELECT * FROM jugador INNER JOIN club ON club.id_club = jugador.id_club  INNER JOIN serie ON serie.id_serie = jugador.id_serie  WHERE rut_jugador = $1', [rut_jugador] );
    res.json(response.rows);
};

const crearJugador = async (req, res) => {
    const {rut_jugador, nombres, apellidos, fecha_nacimiento, id_club, id_serie }= req.body;

    const response = await pool.query('INSERT INTO jugador (rut_jugador, nombres, apellidos, fecha_nacimiento, id_club, id_serie) VALUES ($1, $2, $3, $4, $5, $6)', 
    [rut_jugador, nombres, apellidos, fecha_nacimiento, id_club, id_serie]);
    console.log(response);
    res.json({
        message: 'Jugador Creado Satisfactoriamente',
        body: {
            user: {rut_jugador, nombres, apellidos}
        }
    })
};

const updateJugador = async (req, res) => {
    try{
    const rut_jugador = req.params.rut_jugador;
    const { nombres, apellidos, fecha_nacimiento, id_club, id_serie } = req.body;
    const response = await pool.query('UPDATE jugador SET nombres = $1, apellidos = $2, fecha_nacimiento = $3, id_club = $4, id_serie = $5 WHERE rut_jugador = $6', 
    [
        nombres,
        apellidos,
        fecha_nacimiento,
        id_club,
        id_serie,
        rut_jugador
    ]); 
    console.log(response);
    console.log('MENSAJE',id_club, id_serie);
    res.json('Jugador Modificado Satisfactoriamente');
} catch (error){
    console.log('AAAAAAAAA', error);
    res.status(400).json( {
        ok: true,
        msg: 'Error Get Usuario'
})
}
}

const deleteJugador = async (req, res) => {
    const rut_jugador= req.params.rut_jugador;
    const response = await pool.query('DELETE FROM jugador WHERE rut_jugador = $1', [rut_jugador]);
    console.log(response);
    res.json(`Jugador ${rut_jugador} Eliminado Satisfactoriamente`);
};

module.exports = {
    getJugador,
    crearJugador,
    getJugadorbyRut,
    updateJugador,
    deleteJugador 
};