const jwt = require('jsonwebtoken');
//const a  ='aasasasasasa'  ;
const generarJWTK = (id_login, usuario) =>{

    return new Promise ((resolve, reject) =>{

        const payload = { id_login, usuario};
        jwt.sign(payload, process.env.secret_jwt_seed, {
            expiresIn:'1h'
            
        }, (err, token) =>{
            if (err){
                console.log("El error del jwt es: ", err)
                reject(err)
            }else{
                resolve( token )
            }
        })

    })
} 

module.exports = {
    generarJWTK
}