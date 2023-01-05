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
const getArquero = async (req, res) => {
   const response = await  pool.query('SELECT * FROM valla_menos_batida INNER JOIN club ON club.id_club = valla_menos_batida.id_club ORDER BY cant_goles DESC');
   res.status(200).json(response.rows);
};

const getArquerobyId = async (req, res) => {
    const id_vall_men_batida = req.params.id_vall_men_batida;
    const response = await pool.query('SELECT * FROM valla_menos_batida INNER JOIN club ON club.id_club = valla_menos_batida.id_club WHERE id_vall_men_batida = $1', [id_vall_men_batida]);
    res.json(response.rows);
};

const crearArquero = async (req, res) => {
    const {cant_goles, rut_jugador, id_club, nombre_jugador }= req.body;
    const response = await pool.query('INSERT INTO valla_menos_batida (cant_goles, rut_jugador, id_club, nombre_jugador) VALUES ($1, $2, $3, $4)', 
    [cant_goles, rut_jugador, id_club, nombre_jugador]);
    console.log(response);
    res.json({
        message: 'Arquero Creado Satisfactoriamente',
        body: {
            user: {rut_jugador, nombre_jugador}
        }
    })
};

const updateArquero = async (req, res) => {
    const id_vall_men_batida = req.params.id_vall_men_batida;
    const { cant_goles, rut_jugador, id_club, nombre_jugador } = req.body;
    const response = await pool.query('UPDATE valla_menos_batida SET cant_goles = $1, rut_jugador = $2, id_club = $3, nombre_jugador = $4 WHERE id_vall_men_batida = $5', 
    [
        cant_goles,
        rut_jugador,
        id_club,
        nombre_jugador,
        id_vall_men_batida

    ]); 
    console.log(response);
    res.json('Arquero Modificado Satisfactoriamente');
}

const deleteArquero = async (req, res) => {
    const id_vall_men_batida= req.params.id_vall_men_batida;
    const response = await pool.query('DELETE FROM valla_menos_batida WHERE id_vall_men_batida = $1', [id_vall_men_batida]);
    console.log(response);
    res.json(`Arquero Eliminado Satisfactoriamente`);
};

module.exports = {
    getArquero,
    getArquerobyId,
    crearArquero,
    updateArquero,
    deleteArquero

};