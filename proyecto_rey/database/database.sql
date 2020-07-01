CREATE DATABASE ng_produc_db;

USE ng_produc_db;

CREATE TABLE producto(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombreP VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE producto to productos;