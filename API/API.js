import express from 'express'
import {conectarConBaseDatos} from '../database/conexionDataBase.js'
import {rutas} from '../routes/rutasAPI.js'

export class API{

    constructor(){
        this.app = express();
        this.conectarConBD();
        this.atenderPeticiones();
    }

    levantarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("Servidor encendido " + process.env.PORT)
        })
    }

    conectarConBD(){
        conectarConBaseDatos();
    }

    atenderPeticiones(){
        this.app.use(express.json())
        this.app.use('/',rutas)
    }

}