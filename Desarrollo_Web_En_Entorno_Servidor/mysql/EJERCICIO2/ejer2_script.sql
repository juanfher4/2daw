CREATE DATABASE biblioteca;
USE biblioteca;

DROP TABLE IF EXISTS biblioteca.LIBROS;
CREATE TABLE IF NOT EXISTS biblioteca.LIBROS(
    Cod_libro CHAR(5) NOT NULL,
    Titulo VARCHAR(70) NOT NULL,
    ISBN CHAR(20) NOT NULL,
    Tema ENUM("Informatica", "Salud", "Plantas", "Cocina", "Ficcion", "Otros") NOT NULL,
    Resumen MEDIUMTEXT,
    Tipo ENUM("Enciclopedia", "Texto", "Normal", "Bolsillo", "Otros"),
    Fecha_publicacion DATE,
    Unidades TINYINT,
    Editorial VARCHAR(40),
    CONSTRAINT libros_PK PRIMARY KEY (Cod_libro),
    CONSTRAINT libros_UQ UNIQUE (ISBN),
    CONSTRAINT libros_chk CHECK (Unidades > 0)
);

DROP TABLE IF EXISTS biblioteca.AUTORES;
CREATE TABLE biblioteca.AUTORES(
    Cod_autor CHAR(5) NOT NULL,
    Nombre VARCHAR(40) NOT NULL,
    Nacionalidad VARCHAR(30),
    Biografia MEDIUMTEXT,
    Fecha_nacimiento DATE,
    Premio_Novel BOOLEAN,
    CONSTRAINT autores_PK PRIMARY KEY (Cod_autor),
    CONSTRAINT autores_chk CHECK (Fecha_nacimiento < "2050-01-01")
);

DROP TABLE IF EXISTS biblioteca.ESCRITO;
CREATE TABLE biblioteca.ESCRITO(
    Cod_libro CHAR(5) NOT NULL,
    Cod_autor CHAR(5) NOT NULL,
    CONSTRAINT escrito_PK PRIMARY KEY (Cod_libro,Cod_autor),
    CONSTRAINT escrito_FK1 FOREIGN KEY (Cod_libro) REFERENCES LIBROS(Cod_libro) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT escrito_FK2 FOREIGN KEY (Cod_autor) REFERENCES AUTORES(Cod_autor) ON DELETE RESTRICT ON UPDATE CASCADE
);
