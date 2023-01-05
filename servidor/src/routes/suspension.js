const{ Router } = require('express');
const router = Router();





const { getSuspension, getSuspensionbyId, crearSuspension, updateSuspension, deleteSuspension } = require('../controllers/suspension.controller');

//Suspension
router.get('/suspension', getSuspension );
router.get('/suspension/:id_suspension', getSuspensionbyId);
router.post('/suspension', crearSuspension);
router.put('/suspension/:id_suspension', updateSuspension);
router.delete('/suspension/:id_suspension', deleteSuspension);

module.exports = router;