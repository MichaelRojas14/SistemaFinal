const{ Router } = require('express');

const router = Router();



const { getArquero, getArquerobyId, crearArquero, updateArquero, deleteArquero } = require('../controllers/tablavallabatida');


//Suspension
router.get('/vallabatida', getArquero);
router.get('/vallabatida/:id_vall_men_batida', getArquerobyId  );
router.post('/vallabatida', crearArquero );
router.put('/vallabatida/:id_vall_men_batida', updateArquero);
router.delete('/vallabatida/:id_vall_men_batida', deleteArquero);

module.exports = router;