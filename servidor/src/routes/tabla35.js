const{ Router } = require('express');
const { get35, get35byId, crear35, update35, delete35 } = require('../controllers/tabla35.controller');

const router = Router();







//POSICIONES

router.get('/tablaposicion35', get35);
router.get('/tablaposicion35/:id_tabla35', get35byId);
router.post('/tablaposicion35', crear35 );
router.put('/tablaposicion35/:id_tabla35', update35 );
router.delete('/tablaposicion35/:id_tabla35', delete35); 


module.exports = router;