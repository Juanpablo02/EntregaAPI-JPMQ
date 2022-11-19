import mongoose from 'mongoose';

// Definiendo nuestro schema de datos

const Schema = mongoose.Schema;

const EsquemaHabitacion = new Schema({
    nombre:{
        required:true,
        type:String
    },
    valor:{
        required:true,
        type:Number
    },
    numeroMaximoPersonas:{
        required:true,
        type:Number
    },
    foto:{
        required:true,
        type:String
    },
    descripcion:{
        required:true,
        type:String
    }
});

export const modeloHabitacion = mongoose.model('habitacion',EsquemaHabitacion)