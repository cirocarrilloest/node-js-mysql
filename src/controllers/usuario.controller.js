/**
 * Controlador de usuarios
 * 
 * este modulo define las funciones(metodos) que permiten gestionar empleados
 * mediante operaciones CRUD(Crear, Leer, Actualizar, Eliminar).
 * 
 * primero se importa el modelo de MySQL para acceder a la base de datos.
 */

import pool from '../config/db.js';// importamos el modelo

/**
 * Obtener todos los usuarios.
 * Metodo: GET
 * Ruta: http://localhost:3000/usuario
 */

export const consultarUsuario = async (req,res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM usuario");
        res.json(rows);
    }catch (err) {
        res.status(500).json({message: err.message});
    }
};

/**
 * obtener un usuario
 * Metodo: GET
 *Ruta: http://localhost:3000/usuario/?=numero de usuario a eliminar o id_usuario
 */

export const consultarUnUsuario = async(req,res) => {
    try{
        const {id_usuario}= req.params;
        const [rows] = await pool.query("SELECT * FROM usuario WHERE id_usuario = ?",[id_usuario]);

        if(rows.length === 0){
            return res.status(404).json({message: "usuario no encontrado" });
        }
        res.json(rows[0]);
    }catch (err) {
        res.status(500).json({message: err.message});
    }
};

/**
 * Crear un nuevo usuario
 * Metodo: POST
 * Ruta: http://localhost:3000/usuario
 */

export const crearUsuario = async (req,res) => {
    try{
        const {nombre, apellido, celular, correo, contrasenia} = req.body;
    await pool.query("INSERT INTO usuario (nombre,apellido,celular,correo,contrasenia) VALUES (?, ?, ?, ?, ?)",[nombre,apellido,celular,correo,contrasenia]);
    res.json({ message:"ususario creado"});
    }catch (err) {
        res.status(500).json({message: err.message});
    }
};

/**
 * Actualizar un usuario
 * Metodo: PUT
 * Ruta: http://localhost:3000/usuario/?=numero de usuario a eliminar o id_usuario
 */

export const actualizarUsuario = async (req,res) => {
    try{
        const {id_usuario} = req.params;
    const {nombre,apellido,celular,correo,contrasenia}=req.body;
    await pool.query("UPDATE usuario SET nombre=?, apellido=?, celular=?, correo=?, contrasenia=? WHERE id_usuario=?", [nombre,apellido,celular,correo,contrasenia, id_usuario]);
    res.json({message: "usuario actualizado"});
    }catch (err) {
        res.status(500).json({message: err.message});
    }
};

/**
 * Eliminar un nuevo usuario
 * Metodo: DELETE
 * Ruta: http://localhost:3000/usuario/?=numero de usuario a eliminar o id_usuario
 */

export const eliminarUsuario = async (req,res) => {
    try{
        const {id_usuario} = req.params;
    await pool.query("DELETE FROM usuario WHERE id_usuario = ?",[id_usuario]);
    res.json({message: "usuario eliminado"});
    }catch (err) {
        res.status(500).json({message: err.message});
    }
};

