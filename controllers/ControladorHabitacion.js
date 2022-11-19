// Una clase controlador establece los metodos (acciones) que vamos a realizar en base de datos
// y esta alineado con el archivo de rutas

import { ServicioHabitacion } from "../services/ServicioHabitacion.js";

export class ControladorHabitacion {

    constructor() {}

    async agregarHabitacion(request, response) {

        let datosRegistrar = request.body
        let objetoServicio = new ServicioHabitacion()

        try {
            await objetoServicio.agregarHabitacion(datosRegistrar)
            response.status(200).json({
                mensaje: "Exito en la operacion para agregar una habitacion",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta para agregar una habitacion" + error,
                datos: null,
            });
        }
    }

    async consultarHabitacion(request, response) {

        let id = request.params.id
        let objetoServicio = new ServicioHabitacion()

        try {
            response.status(200).json({
                mensaje: "Exito en la operacion de consulta de habitacion",
                datos: await objetoServicio.buscarHabitacion(id)
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta de consulta de habitacion" + error,
                datos: null,
            });
        }
    }

    async consultarHabitaciones(request, response) {

        let objetoServicio = new ServicioHabitacion()

        try {
            response.status(200).json({
                mensaje: "Exito en la operacion de consulta de habitaciones",
                datos: await objetoServicio.buscarHabitaciones(),
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta de consultad de habitaciones" + error,
                datos: null,
            });
        }
    }

    async editarHabitacion(request, response) {

        let id = request.params.id
        let datosEditar = request.body
        let objetoServicio = new ServicioHabitacion()

        try {
            await objetoServicio.editarHabitacion(id,datosEditar)
            response.status(200).json({
                mensaje: "Exito en la operacion para editar una habitacion",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta para editar una habitacion" + error,
                datos: null,
            });
        }
    }
}
