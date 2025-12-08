/**
 * archivo principal del backend
 * 
 * aqui se configura y arranca el servido express
 * se definen los middlewares, la conexion a la base de datos y las rutas
 */

import express from "express"; //framework para construir el servidor web
import dotenv from "dotenv"; 
import usuariosRoutes from "./routes/usuario.routes.js";

dotenv.config();

const app = express();

//---------------------
//Middleware
//---------------------

// Middleware para interpretar los datos enviados en formato JSON
app.use(express.json());

//---------------------
//Rutas del servidor
//---------------------

//se define el prefijo '/usuario' y se le asocia las rutas del archivo usuariosRoutes
app.use("/usuario", usuariosRoutes);

//---------------------
//Inicio de servidor
//---------------------

// se inicia el servidor y se muestra un mensaje indicando el puerto activo
app.listen(process.env.PORT, ()=>{
        console.log(`servidor activo en el puerto: ${process.env.PORT}`);
});