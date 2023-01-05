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
const getSerie = async (req, res) => {
   const response = await  pool.query('SELECT * FROM serie');
   res.status(200).json(response.rows);
};

const getSeriebyId = async (req, res) => {
    const id_serie = req.params.id_serie;
    const response = await pool.query('SELECT * FROM serie WHERE id_serie = $1', [id_serie]);
    res.json(response.rows);
};

const crearSerie = async (req, res) => {
    const { nombre_serie, informacion }= req.body;

    const response = await pool.query('INSERT INTO serie (nombre_serie, informacion) VALUES ($1, $2)', 
    [nombre_serie,informacion]);
    console.log(response);
    res.json({
        message: 'Serie Creada Satisfactoriamente',
        body: {
            user: {nombre_serie}
        }
    })
};

const updateSerie = async (req, res) => {
    const id_serie = req.params.id_serie;
    const { nombre_serie, informacion } = req.body;
    const response = await pool.query('UPDATE serie SET nombre_serie = $1, informacion = $2 WHERE id_serie = $3', 
    [
        nombre_serie,
        informacion,
        id_serie

    ]); 
    console.log(response);
    res.json('Serie Modificada Satisfactoriamente');
}

const deleteSerie = async (req, res) => {
    const id_serie = req.params.id_serie;
    const response = await pool.query('DELETE FROM serie WHERE id_serie = $1', [id_serie]);
    console.log(response);
    res.json(`Serie ${id_serie} Eliminado Satisfactoriamente`);
};

module.exports = {
    getSerie,
    crearSerie,
    getSeriebyId,
    updateSerie,
    deleteSerie
};