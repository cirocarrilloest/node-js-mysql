/**
 * Archivo de conexion a la base de datos MySQL usando pool
 *
 * Este modulo establece la conexion entre la aplicacion backend y
 * la base de datos local llamada "barberia".
 */

import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
// conexion a MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool
  .getConnection()
  .then((conn) => {
    console.log(`base de datos conectada: ${process.env.DB_PORT}`); // mensaje de conexion
    conn.release();
  })
  .catch((err) => console.error("error al conectar a DB", err)); //mensaje de error de conexion

//exportamos pool para usar la conexion en otros modulos.
export default pool;
