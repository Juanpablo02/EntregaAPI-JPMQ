// Una clase controlador establece los metodos (acciones) que vamos a realizar en base de datos
// y esta alineado con el archivo de rutas

import { ServicioReserva } from "../services/ServicioReserva.js";

export class ControladorReserva {
    constructor() {}
    

    async agregarReserva(request, response) {

        let datosRegistrar = request.body
        let objetoServicio = new ServicioReserva()

        try {
            await objetoServicio.agregarReserva(datosRegistrar)
            response.status(200).json({
                mensaje: "Exito en la operacion para reservar una habitacion",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta para reservar una habitacion" + error,
                datos: null,
            });
        }
    }
    async consultarReservas(request, response) {

        let objetoServicio = new ServicioReserva()

        try {
            response.status(200).json({
                mensaje: "Exito en la operacion de consultar de reservas",
                datos: await objetoServicio.consultarReservas(),
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta de consulta de reservas" + error,
                datos: null,
            });
        }
    }

    async consultarReserva(request, response) {

        let id = request.params.id
        let objetoServicio = new ServicioReserva()

        try {
            response.status(200).json({
                mensaje: "Exito en la operacion de consulta de reserva",
                datos: await objetoServicio.consultarReserva(id),
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta de consultad de reserva" + error,
                datos: null,
            });
        }
    }

    async editarReserva(request, response) {

        let id = request.params.id
        let datosRegistrar = request.body
        let objetoServicio = new ServicioReserva()

        try {
            await objetoServicio.editarReserva(id,datosRegistrar)
            response.status(200).json({
                mensaje: "Exito en la operacion para editar una reserva",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta para editar una reserva" + error,
                datos: null,
            });
        }
    }
}
