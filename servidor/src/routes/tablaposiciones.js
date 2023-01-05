const{ Router } = require('express');

const router = Router();



const { getPosicion, getPosicionbyId, crearPosicion, updatePosicion, deletePosicion } = require('../controllers/tablaposicion.controller');


//POSICIONES

router.get('/tablaposicionhonor', getPosicion);
router.get('/tablaposicionhonor/:id_tabla', getPosicionbyId );
router.post('/tablaposicionhonor', crearPosicion );
router.put('/tablaposicionhonor/:id_tabla', updatePosicion );
router.delete('/tablaposicionhonor/:id_tabla', deletePosicion); 


module.exports = router;