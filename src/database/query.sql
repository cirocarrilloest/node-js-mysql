CREATE DATABASE barberia;//crear base de datos

USE barberia;
//crear tabla usuarios
CREATE TABLE usuario(
    id_usuario int AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    apellido VARCHAR(40) NOT NULL,
    celular VARCHAR(10) NOT NULL UNIQUE,
    correo VARCHAR(68) NOT NULL UNIQUE,
    contrasenia VARCHAR(100) NOT NULL,
    estado ENUM('activo','inactivo') NOT NULL DEFAULT 'activo'
)ENGINE=InnoDB; 
TRUNCATE TABLE usuario;// limpiar la tabla de datos
SELECT * FROM usuario;// ver contenido de tabla
// insertar datos a la tabla para evaluar funcionalidad
USE barberia;
INSERT INTO usuario (nombre, apellido, celular, correo, contrasenia) VALUES
('Juan', 'Pérez', '3001234567', 'juan.perez@example.com', '123456'),
('María', 'Gómez', '3109876543', 'maria.gomez@example.com', 'abcdef'),
('Carlos', 'Ramírez', '3123456789', 'carlos.ramirez@example.com', 'qwerty'),
('Ana', 'Martínez', '3112345678', 'ana.martinez@example.com', 'password'),
('Luis', 'Rodríguez', '3139876543', 'luis.rodriguez@example.com', 'luis123'),
('Sofía', 'López', '3145678901', 'sofia.lopez@example.com', 'sofia2025'),
('Andrés', 'Torres', '3156789012', 'andres.torres@example.com', 'andres321'),
('Valentina', 'Morales', '3167890123', 'valentina.morales@example.com', 'valen456'),
('Diego', 'Castillo', '3178901234', 'diego.castillo@example.com', 'diego789'),
('Camila', 'Ríos', '3189012345', 'camila.rios@example.com', 'camila000');
