CREATE DATABASE inmobiliaria;
USE inmobiliaria;

CREATE TABLE IF NOT EXISTS inmobiliaria.PROPIETARIOS(
    Cod_pro CHAR(4) NOT NULL,
    Nombre CHAR(80) NOT NULL,
    NIF CHAR(9) NOT NULL,
    TLF CHAR(9) NOT NULL,
    Direccion CHAR(100),
    CONSTRAINT propietarios_PK PRIMARY KEY (Cod_pro),
    CONSTRAINT propietarios_UQ1 UNIQUE (NIF),
    CONSTRAINT propietarios_UQ2 UNIQUE (TLF)
);

CREATE TABLE inmobiliaria.VIVIENDAS(
    Cod_vi CHAR(4) NOT NULL,
    Provincia VARCHAR(70) NOT NULL,
    Ciudad VARCHAR(90) NOT NULL,
    Calle VARCHAR(100) NOT NULL,
    Numero SMALLINT,
    Planta TINYINT,
    Letra CHAR(1),
    Tipo ENUM('Casa','Piso','Aparcamiento','Duplex','Otros') NOT NULL,
    Habitaciones TINYINT NOT NULL,
    Metros SMALLINT NOT NULL default 0,
    Garaje BOOLEAN,
    Banos TINYINT, /* Baños */
    Trastero BOOLEAN,
    Venta_alquiler ENUM('Venta','Alquiler') NOT NULL,
    Precio DECIMAL(11,2) NOT NULL,
    Fecha_entrada TIMESTAMP NOT NULL default NOW(),
    Cod_pro CHAR(4) NOT NULL,
    Disponible BOOLEAN NOT NULL,
    CONSTRAINT Viviendas_pk PRIMARY KEY(Cod_vi),
    CONSTRAINT viviendas_FK1 FOREIGN KEY (Cod_pro) REFERENCES PROPIETARIOS(Cod_pro),
    CONSTRAINT viviendas_chk1 CHECK (Metros >=0),
    CONSTRAINT viviendas_chk2 CHECK (Habitaciones >=0),
    CONSTRAINT viviendas_chk3 CHECK (Banos >=0)
);

/* El campo "Fecha_entrada" con el tipo de datos "DATE" no permite poner por defecto el valor de la fecha actual. He tenido 
que usar el tipo de dato "TIMESTAMP", que es equivalente. Con este último, el valor por defecto se puede poner así: default 
NOW() ó default CURRENT_TIMESTAMP */

/*El create table anterior, a pesar de tener restricciones de tipo CHECK, se ejecuta sin problemas.
Lo único que el sistema no las va a tener en cuenta,
es como si no las pusiéramos. Mysql no hace caso de las restricciones tipo CHECK, al menos hasta el momento. */ /*Aunque la pongamos con Alter table, las toma bien, pero NO las tiene en cuenta:
ALTER TABLE VIVIENDAS
ADD CONSTRAINT viviendas_chk2 CHECK (Habitaciones >=0);
Por tanto, solo se podrán establecer mediante TRIGGER (en la propia base de datos)
ó mediante programación (fuera de la base de datos).*/

CREATE TABLE inmobiliaria.CLIENTES(
    Cod_cli CHAR(4) NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    NIF CHAR(9) NOT NULL,
    TLF CHAR(9) NOT NULL,
    Direccion CHAR(120),
    CONSTRAINT Clientes_PK PRIMARY KEY(Cod_cli),
    CONSTRAINT Clientes_UQ1 UNIQUE (NIF),
    CONSTRAINT Clientes_UQ2 UNIQUE (TLF)
);

CREATE TABLE inmobiliaria.CONTRATOS(
    Cod_vi CHAR(4) NOT NULL,
    Cod_cli CHAR(4) NOT NULL,
    Fecha TIMESTAMP NOT NULL default NOW(),
    Precio_pagado DECIMAL(11,2) NOT NULL,
    Tipo ENUM("Venta","Alquiler") NOT NULL,
    CONSTRAINT CONTRATOS_PK PRIMARY KEY(Cod_vi,Cod_cli,Fecha),
    CONSTRAINT CONTRATOS_FK1 FOREIGN KEY (Cod_vi) REFERENCES VIVIENDAS(Cod_vi) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT CONTRATOS_FK2 FOREIGN KEY (Cod_cli) REFERENCES CLIENTES(Cod_cli) ON DELETE RESTRICT ON UPDATE CASCADE
);
