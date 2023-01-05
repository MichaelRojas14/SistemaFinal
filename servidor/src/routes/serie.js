const{ Router } = require('express');
const router = Router();




const { getSerie, getSeriebyId, crearSerie, updateSerie, deleteSerie } = require('../controllers/serie.controller');

//Serie
router.get('/serie', getSerie );
router.get('/serie/:id_serie', getSeriebyId);
router.post('/serie', crearSerie);
router.put('/serie/:id_serie', updateSerie);
router.delete('/serie/:id_serie', deleteSerie);

module.exports = router;