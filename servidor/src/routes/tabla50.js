const{ Router } = require('express');
const { get50, get50byId, crear50, update50, delete50 } = require('../controllers/tabla50.controller');
const router = Router();







//POSICIONES

router.get('/tablaposicion50', get50);
router.get('/tablaposicion50/:id_tabla50', get50byId );
router.post('/tablaposicion50', crear50 );
router.put('/tablaposicion50/:id_tabla50', update50 );
router.delete('/tablaposicion50/:id_tabla50', delete50); 


module.exports = router;