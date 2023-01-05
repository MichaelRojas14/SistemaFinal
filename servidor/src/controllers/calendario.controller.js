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
const getCalendario = async (req, res) => {
   const response = await  pool.query('SELECT id_calendario, lo.id_club AS id_local, lo.nombre_club AS clubLocal, vi.id_club AS id_visita, vi.nombre_club AS clubVisita, c.fecha_partido, c.informacion  FROM calendario AS c INNER JOIN club AS lo ON lo.id_club = c.id_local INNER JOIN club AS vi ON vi.id_club = c.id_visita ');
   res.status(200).json(response.rows);
};

const getCalendarioById = async (req, res) => {
    const id_calendario = req.params.id_calendario;
    const response = await pool.query('SELECT * FROM calendario WHERE id_calendario = $1', [id_calendario]);
    res.json(response.rows);
};

const crearCalendario = async (req, res) => {
    const { fecha_partido, informacion, id_local, id_visita }= req.body;

    const response = await pool.query('INSERT INTO calendario (fecha_partido, informacion, id_local, id_visita) VALUES ($1, $2, $3, $4)', 
    [ fecha_partido, informacion, id_local, id_visita]);
    console.log(response);
    res.json({
        message: 'Calendario Creado Satisfactoriamente'
    })
};

const updateCalendario = async (req, res) => {
    const id_calendario = req.params.id_calendario;
    const { fecha_partido, informacion, id_local, id_visita } = req.body;
    const response = await pool.query('UPDATE calendario SET fecha_partido = $1, informacion = $2, id_local = $3, id_visita = $4 WHERE id_calendario = $5', 
    [
        fecha_partido,
        informacion,
        id_local,
        id_visita,
        id_calendario
    ]); 
    console.log(response);
    res.json('Calendario Modificado Satisfactoriamente');
}

const deleteCalendario = async (req, res) => {
    const id_calendario = req.params.id_calendario;
    const response = await pool.query('DELETE FROM calendario WHERE id_calendario = $1', [id_calendario]);
    console.log(response);
    res.json(`Calendario Eliminado Satisfactoriamente`);
};

module.exports = {
    getCalendario,
    crearCalendario,
    getCalendarioById,
    updateCalendario,
    deleteCalendario
};