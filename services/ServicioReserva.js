import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReserva{

    async agregarReserva(reserva){
        let nuevaReserva = new modeloReserva(reserva)
        return await nuevaReserva.save()
    }

    async consultarReservas(){
        let reservaEncontradas = await modeloReserva.find()
        return reservaEncontradas
    }

    async consultarReserva(id){
        let reservaEncontrada = await modeloReserva.findById(id)
        return reservaEncontrada
    }

    async editarReserva(id,datosNuevos){
        return await modeloReserva.findByIdAndUpdate(id,datosNuevos)
    }

}