const{ Router } = require('express');
const { getJuvenil, getJuvenilbyId, crearJuvenil, updateJuvenil, deleteJuvenil } = require('../controllers/tablajuvenil.controller');

const router = Router();






//POSICIONES

router.get('/tablaposicionjuvenil', getJuvenil);
router.get('/tablaposicionjuvenil/:id_tabla_juv', getJuvenilbyId );
router.post('/tablaposicionjuvenil', crearJuvenil );
router.put('/tablaposicionjuvenil/:id_tabla_juv', updateJuvenil );
router.delete('/tablaposicionjuvenil/:id_tabla_juv', deleteJuvenil); 


module.exports = router;