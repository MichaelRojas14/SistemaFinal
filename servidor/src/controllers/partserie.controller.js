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
const getPartSerie = async (req, res) => {
   const response = await  pool.query('SELECT id_part_serie, fecha, lo.id_club AS id_local, lo.nombre_club AS clubLocal, vi.id_club AS id_visita, vi.nombre_club AS clubVisita, ps.id_serie AS id_serie, ps.nombre_serie AS serie, goles_local, goles_visita  FROM partido_serie AS par INNER JOIN club AS lo ON lo.id_club = par.id_local INNER JOIN club AS vi ON vi.id_club = par.id_visita INNER JOIN serie AS ps ON ps.id_serie = par.id_serie ');
   res.status(200).json(response.rows); 
};

const getPartSeriebyId = async (req, res) => {
    const id_part_serie = req.params.id_part_serie;
    const response = await pool.query('SELECT * FROM partido_serie WHERE id_part_serie = $1', [id_part_serie] );
    res.json(response.rows);
};

const crearPartSerie = async (req, res) => {
    const {fecha, goles_local, goles_visita, id_local, id_visita, id_serie }= req.body;

    const response = await pool.query('INSERT INTO partido_serie (fecha, goles_local, goles_visita, id_local, id_visita, id_serie) VALUES ($1, $2, $3, $4, $5, $6)', 
    [fecha, goles_local, goles_visita, id_local,id_visita, id_serie]);
    console.log(response);
    res.json({
        message: 'Resultado Guardado Satisfactoriamente',
    })
};

const updatePartSerie = async (req, res) => {
    try{
    const id_part_serie = req.params.id_part_serie;
    const { fecha, goles_local, goles_visita, id_serie } = req.body;
    const response = await pool.query('UPDATE partido_serie SET fecha = $1, goles_local = $2, goles_visita = $3, id_serie = $4 WHERE id_part_serie = $5', 
    [
        fecha,
        goles_local,
        goles_visita,
        id_serie,
        id_part_serie
    ]); 
    console.log(response);
    res.json('Partido Modificado Satisfactoriamente');
} catch (error){
    console.log('AAAAAAAAA', error);
    res.status(400).json( {
        ok: true,
        msg: 'Error Get Usuario'
})
}
}

const deletePartSerie = async (req, res) => {
    const id_part_serie= req.params.id_part_serie;
    const response = await pool.query('DELETE FROM partido_serie WHERE id_part_serie = $1', [id_part_serie]);
    console.log(response);
    res.json(`Partido Eliminado Satisfactoriamente`);
};

module.exports = {
    getPartSerie,
    crearPartSerie,
    getPartSeriebyId,
    updatePartSerie,
    deletePartSerie
};