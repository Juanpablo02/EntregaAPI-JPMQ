import * as dotenv from "dotenv";
dotenv.config();

import { API } from "./API/API.js";

//Creamos un objeto de la clase API para utilizarla
let apiHotel = new API();

//Encender el servidor para poder ejecutar correctamente el API
apiHotel.levantarServidor();


