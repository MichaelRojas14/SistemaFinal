const{ Router } = require('express');
const { getprimera, getprimerabyId, crearprimera, updateprimera, deleteprimera } = require('../controllers/primera.controller');
const router = Router();







//POSICIONES

router.get('/tablaposicionprimera/', getprimera );
router.get('/tablaposicionprimera/:id_tabla_prim', getprimerabyId);
router.post('/tablaposicionprimera/', crearprimera );
router.put('/tablaposicionprimera/:id_tabla_prim', updateprimera );
router.delete('/tablaposicionprimera/:id_tabla_prim', deleteprimera); 


module.exports = router;