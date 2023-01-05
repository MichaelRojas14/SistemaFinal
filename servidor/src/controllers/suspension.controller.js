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
const getSuspension = async (req, res) => {
   const response = await  pool.query('SELECT * FROM suspension INNER JOIN club ON club.id_club = suspension.id_club');
   res.status(200).json(response.rows);
};

const getSuspensionbyId = async (req, res) => {
    const id_suspension = req.params.id_suspension;
    const response = await pool.query('SELECT * FROM suspension WHERE id_suspension = $1', [id_suspension]);
    res.json(response.rows);
};

const crearSuspension = async (req, res) => {
    const {fechas_suspension, id_club, rut_jugador}= req.body;

    const response = await pool.query('INSERT INTO suspension (fechas_suspension,id_club,rut_jugador) VALUES ($1,$2,$3)', 
    [fechas_suspension,id_club,rut_jugador]);
    console.log(response);
    res.json({
        message: 'Suspension Ingresada Satisfactoriamente'
    })
};

const updateSuspension = async (req, res) => {
    const id_suspension = req.params.id_suspension;
    const { fechas_suspension, id_club, rut_jugador} = req.body;
    const response = await pool.query('UPDATE suspension SET fechas_suspension = $1, id_club = $2, rut_jugador = $3 WHERE id_suspension = $4', 
    [
        fechas_suspension,
        id_club,
        rut_jugador,
        id_suspension

    ]); 
    console.log(response);
    res.json('Suspension Modificada Satisfactoriamente');
}

const deleteSuspension = async (req, res) => {
    const id_suspension = req.params.id_suspension;
    const response = await pool.query('DELETE FROM suspension WHERE id_suspension = $1', [id_suspension]);
    console.log(response);
    res.json(`Suspension ${id_suspension} Eliminada Satisfactoriamente`);
};

module.exports = {
    getSuspension,
    crearSuspension,
    getSuspensionbyId,
    updateSuspension,
    deleteSuspension 
};