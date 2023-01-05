const{ Router } = require('express');
const router = Router();




const { getJugador, getJugadorbyRut, crearJugador, updateJugador, deleteJugador } = require('../controllers/jugador.controller')

//Jugador
router.get('/jugador', getJugador );
router.get('/jugador/:rut_jugador', getJugadorbyRut);
router.post('/jugador', crearJugador);
router.put('/jugador/:rut_jugador', updateJugador);
router.delete('/jugador/:rut_jugador', deleteJugador);

module.exports = router;