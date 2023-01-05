const{ Router } = require('express');

const router = Router();



const { getPartSerie, getPartSeriebyId, crearPartSerie, updatePartSerie, deletePartSerie } = require('../controllers/partserie.controller');

//PARTIDO SERIE
router.get('/partido-serie', getPartSerie );
router.get('/partido-serie/:id_part_serie', getPartSeriebyId);
router.post('/partido-serie', crearPartSerie);
router.put('/partido-serie/:id_part_serie', updatePartSerie);
router.delete('/partido-serie/:id_part_serie', deletePartSerie);

module.exports = router;