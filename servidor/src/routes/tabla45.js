const{ Router } = require('express');
const { get45, get45byId, crear45, update45, delete45 } = require('../controllers/tabla45.controller');

const router = Router();







//POSICIONES

router.get('/tablaposicion45', get45);
router.get('/tablaposicion45/:id_tabla45', get45byId );
router.post('/tablaposicion45', crear45 );
router.put('/tablaposicion45/:id_tabla45', update45 );
router.delete('/tablaposicion45/:id_tabla45', delete45); 


module.exports = router;