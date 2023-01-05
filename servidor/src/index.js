const express = require('express');
const app = express();
const cors = require("cors");
const  path  = require('path');

require('dotenv').config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//routes
app.use(require('./routes/club'));
app.use(require('./routes/jugador'));
app.use(require('./routes/serie'));
app.use(require('./routes/suspension'));
app.use(require('./routes/tablagoleador'));
app.use(require('./routes/vallabatida'));
app.use(require('./routes/calendario'));
app.use(require('./routes/partserie'));
app.use(require('./routes/login'));
app.use(require('./routes/tablaposiciones'));
app.use(require('./routes/tablajuvenil'));
app.use(require('./routes/tabla50'));
app.use(require('./routes/tabla45'));
app.use(require('./routes/tabla35'));
app.use(require('./routes/primera'));

app.listen(process.env.PORT  , () =>{
    console.log(`servidor en puerto: ${process.env.PORT } `)

});

//app.listen(3000);
//console.log('Servidor en puerto 3000');