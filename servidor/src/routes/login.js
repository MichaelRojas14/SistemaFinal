const Router = require('express');
const router = Router();



const { login } = require('../controllers/login.controller');
//const { validarJWT } = require('../../reutilizar-verificaciones/validar-jwt');


router.post('/login', login);
//router.get('/renovar', validarJWT, revalidarToken);
module.exports = router;