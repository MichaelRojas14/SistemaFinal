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
const getprimera = async (req, res) => {
   const response = await  pool.query('SELECT * FROM tabla_primera INNER JOIN club ON club.id_club = tabla_primera.id_club INNER JOIN serie ON serie.id_serie = tabla_primera.id_serie ORDER BY puntos DESC');
   res.status(200).json(response.rows);
};

const getprimerabyId = async (req, res) => {
    const id_tabla_prim = req.params.id_tabla_prim;
    const response = await pool.query('SELECT * FROM tabla_primera WHERE id_tabla_prim = $1', [id_tabla_prim]);
    res.json(response.rows);
};

const crearprimera = async (req, res) => {
    const {id_club, part_jugado, part_ganado, part_empatado, part_perdido, puntos, id_serie }= req.body;

    const response = await pool.query('INSERT INTO tabla_primera (id_club, part_jugado, part_ganado, part_empatado, part_perdido, puntos, id_serie) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [id_club, part_jugado, part_ganado, part_empatado, part_perdido, puntos, id_serie]);
    console.log(response);
    res.json({
        message: 'Club Ingresado a Tabla Satisfactoriamente',
    })
};

const updateprimera = async (req, res) => {
    const id_tabla_prim = req.params.id_tabla_prim;
    const { id_club, part_jugado, part_ganado, part_empatado, part_perdido, puntos, id_serie } = req.body;
    const response = await pool.query('UPDATE tabla_primera SET id_club = $1, part_jugado = $2, part_ganado = $3, part_empatado = $4, part_perdido = $5, puntos = $6, id_serie= $7  WHERE id_tabla_prim = $8', 
    [

        id_club,
        part_jugado,
        part_ganado,
        part_empatado,
        part_perdido,
        puntos,
        id_serie,
        id_tabla_prim

    ]); 
    console.log(response);
    res.json('Club Modificado Satisfactoriamente');
}

const deleteprimera = async (req, res) => {
    const id_tabla_prim= req.params.id_tabla_prim;
    const response = await pool.query('DELETE FROM tabla_35 WHERE id_tabla_prim = $1', [id_tabla_prim]);
    console.log(response);
    res.json(`Club Eliminado Satisfactoriamente`);
};


module.exports = {
    getprimera,
    getprimerabyId,
    crearprimera,
    updateprimera,
    deleteprimera


};