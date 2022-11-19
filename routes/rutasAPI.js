import express from 'express'
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'

//EN EL ARCHIVO DE RUTAS CREO UNA VARIABLE
//ENCARGADA DE DEFINIR TODOS LOS ENDPOINTS DE MI API

//POR CADA SERVICIO QUE ODRECE MI API DEBO TENER UN ENDPOINT O RUTA

export let rutas = express.Router()

// Creo un objeto de la clase ControladroHabitacion

let controladorHabitacion = new ControladorHabitacion()
let controladorReserva = new ControladorReserva()

//DEFINO LAS RUTAS PARA CADA SERVICIO DE MI API:

rutas.post('/api/hotel/habitaciones',controladorHabitacion.agregarHabitacion)
rutas.get('/api/hotel/habitaciones',controladorHabitacion.consultarHabitaciones)
rutas.get('/api/hotel/habitaciones/:id',controladorHabitacion.consultarHabitacion)
rutas.put('/api/hotel/habitaciones/:id',controladorHabitacion.editarHabitacion)


//Rutas para servicio de reservas

rutas.post('/api/hotel/reservas',controladorReserva.agregarReserva)
rutas.get('/api/hotel/reservas',controladorReserva.consultarReservas)
rutas.get('/api/hotel/reservas/:id',controladorReserva.consultarReserva)
rutas.put('/api/hotel/reservas/:id',controladorReserva.editarReserva)

