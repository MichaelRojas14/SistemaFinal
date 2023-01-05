const{ Router } = require('express');
const router = Router();





const { getGoleador, getGoleadorbyId, crearGoleador, updateGoleador, deleteGoleador } = require('../controllers/tablagoleador.controller');

//Suspension
router.get('/tablagoleador', getGoleador);
router.get('/tablagoleador/:id_tabla_goleador', getGoleadorbyId );
router.post('/tablagoleador', crearGoleador );
router.put('/tablagoleador/:id_tabla_goleador', updateGoleador );
router.delete('/tablagoleador/:id_tabla_goleador', deleteGoleador);

module.exports = router;