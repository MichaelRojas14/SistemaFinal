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
const get35 = async (req, res) => {
   const response = await  pool.query('SELECT * FROM tabla_35 INNER JOIN club ON club.id_club = tabla_35.id_club INNER JOIN serie ON serie.id_serie = tabla_35.id_serie ORDER BY puntos DESC');
   res.status(200).json(response.rows);
};

const get35byId = async (req, res) => {
    const id_tabla35 = req.params.id_tabla35;
    const response = await pool.query('SELECT * FROM tabla_35 WHERE id_tabla35 = $1', [id_tabla35]);
    res.json(response.rows);
};

const crear35 = async (req, res) => {
    const {id_club, part_jugado, part_ganado, part_empatado, part_perdido, puntos, id_serie }= req.body;

    const response = await pool.query('INSERT INTO tabla_35 (id_club, part_jugado, part_ganado, part_empatado, part_perdido, puntos, id_serie) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [id_club, part_jugado, part_ganado, part_empatado, part_perdido, puntos, id_serie]);
    console.log(response);
    res.json({
        message: 'Club Ingresado a Tabla Satisfactoriamente',
    })
};

const update35 = async (req, res) => {
    const id_tabla35 = req.params.id_tabla35;
    const { id_club, part_jugado, part_ganado, part_empatado, part_perdido, puntos, id_serie } = req.body;
    const response = await pool.query('UPDATE tabla_35 SET id_club = $1, part_jugado = $2, part_ganado = $3, part_empatado = $4, part_perdido = $5, puntos = $6, id_serie= $7  WHERE id_tabla35 = $8', 
    [

        id_club,
        part_jugado,
        part_ganado,
        part_empatado,
        part_perdido,
        puntos,
        id_serie,
        id_tabla35

    ]); 
    console.log(response);
    res.json('Club Modificado Satisfactoriamente');
}

const delete35 = async (req, res) => {
    const id_tabla35= req.params.id_tabla35;
    const response = await pool.query('DELETE FROM tabla_35 WHERE id_tabla35 = $1', [id_tabla35]);
    console.log(response);
    res.json(`Club Eliminado Satisfactoriamente`);
};


module.exports = {
    get35,
    get35byId,
    crear35,
    update35,
    delete35


};