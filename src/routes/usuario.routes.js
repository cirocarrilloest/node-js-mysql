/**
 * Modulo de rutas para la entidad Usuario
 * 
 * utilizamos el modulo `express` para crear enrutador que define las rutas
 * del backend relacionadas con los empleados. estas rutas seran consumidas
 * desde el cliente
 */

//importamos express para usar su Router
import { Router} from "express";
import {
    consultarUsuario,
    consultarUnUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} from "../controllers/usuario.controller.js";

const router = Router();

/**
 * Rutas disponibles para el recurso empleado.
 * cada una se asocia con una funcion definida en el controlador correspondiente.
 */

//Obtener tolos los usuarios
//GET http://localhost:3000/usuario
router.get("/",consultarUsuario);

//Obtener un usuarios
//GET http://localhost:3000/usuario/?
router.get("/:id_usuario",consultarUnUsuario);

//Crear un nuevo usuario
//POST http://localhost:3000/usuario
router.post("/",crearUsuario);

//Actualizar un usuario por su id_ususario
//PUT http://localhost:3000/usuario/?
router.put("/:id_usuario",actualizarUsuario);

//Eliminar un usuario por su id_usuario
//DELETE http://localhost:3000/usuario/?
router.delete("/:id_usuario",eliminarUsuario);


export default router;