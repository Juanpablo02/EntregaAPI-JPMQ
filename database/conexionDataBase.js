import mongoose from 'mongoose';

// Conectar con base de datos

export async function conectarConBaseDatos(){

    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectandonos con bd")
    } catch (error){
        console.log("Error en bd: "+error)
    }
}

