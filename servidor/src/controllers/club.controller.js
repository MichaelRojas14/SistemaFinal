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
const getClub = async (req, res) => {
   const response = await  pool.query('SELECT * FROM club');
   res.status(200).json(response.rows);
};

const getClubById = async (req, res) => {
    const id_club = req.params.id_club;
    const response = await pool.query('SELECT * FROM club WHERE id_club = $1', [id_club]);
    res.json(response.rows);
};

const crearClub = async (req, res) => {
    const { nombre_club, fecha_fundacion, ubicacion, informacion }= req.body;

    const response = await pool.query('INSERT INTO club (nombre_club, fecha_fundacion, ubicacion, informacion) VALUES ($1, $2, $3, $4)', 
    [ nombre_club, fecha_fundacion, ubicacion, informacion]);
    console.log(response);
    res.json({
        message: 'Club Creado Satisfactoriamente',
        body: {
            user: {nombre_club}
        }
    })
};

const updateClub = async (req, res) => {
    const id_club = req.params.id_club;
    const { nombre_club, fecha_fundacion, ubicacion, informacion } = req.body;
    const response = await pool.query('UPDATE club SET nombre_club = $1, fecha_fundacion = $2, ubicacion = $3, informacion = $4 WHERE id_club = $5', 
    [
        nombre_club,
        fecha_fundacion,
        ubicacion,
        informacion,
        id_club
    ]); 
    console.log(response);
    res.json('Club Modificado Satisfactoriamente');
}

const deleteClub = async (req, res) => {
    const id_club = req.params.id_club;
    const response = await pool.query('DELETE FROM club WHERE id_club = $1', [id_club]);
    console.log(response);
    res.json(`Club ${id_club} Eliminado Satisfactoriamente`);
};

module.exports = {
    getClub,
    crearClub,
    getClubById,
    updateClub,
    deleteClub
};