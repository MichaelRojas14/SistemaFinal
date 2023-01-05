const{ Router } = require('express');
const router = Router();

const { getCalendario, getCalendarioById, crearCalendario, updateCalendario, deleteCalendario } = require('../controllers/calendario.controller');

//CALENDARIO
router.get('/calendario', getCalendario );
router.get('/calendario/:id_calendario', getCalendarioById);
router.post('/calendario', crearCalendario);
router.put('/calendario/:id_calendario', updateCalendario);
router.delete('/calendario/:id_calendario', deleteCalendario);


module.exports = router;