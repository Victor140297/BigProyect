CREATE DATABASE ng_compon_db;

USE ng_compon_db;

CREATE TABLE componente(
    idComponent INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombreC VARCHAR(180) NOT NULL,
    cantidadC FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE componente to componentes;