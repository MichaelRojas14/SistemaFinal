const { response } = require('express'); 
const jwt = require('jsonwebtoken');


const validarJWT =  (req, res = response, next) => {


    const token = req.header('x-token');

    if (!token){

        return res.status(401).json({
            ok         :false,
            msg: "Error Al Renovar Token",
            
        })

    }

    try {
        

        const { id_login, usuario } = jwt.verify( token, process.env.secret_jwt_seed );
        req.id_login     = id_login;
        req.usuario = usuario;
         
    } catch (error) {
        
        return res.status(401).json({
            ok         :false,
            msg: "Token no valido",
            
        })

    }
    next();

}
module.exports = {
    validarJWT
}