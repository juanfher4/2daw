
/* Ejercicio 4 */

INSERT INTO LIBROS VALUES ("L0001", "Diseño de bases de datos", "111-111-111", "Informatica", NULL, "Normal", "1987-10-10", 1, "Ra-Ma00");
INSERT INTO LIBROS VALUES ("L0002", "Access 2020", "222-222-222", "Informatica", NULL, "Normal", "2011-02-01", 2, "Anaya");
INSERT INTO LIBROS VALUES ("L0003", "Plantas de la Selva", "333-333-333", "Plantas", NULL, "Bolsillo", "1992-05-18", 5, "Ra-Ma00");
INSERT INTO LIBROS VALUES ("L0004", "Salud 5476", "444-444-444", "Salud", NULL, "Otros", "2014-10-30", 4, "Acantilado");
INSERT INTO LIBROS VALUES ("L0005", "Star Wars", "555-555-555", "Ficcion", "La mejor SAGA", "Texto", "1976-11-24", 3, "LucasWriter");

INSERT INTO AUTORES VALUES ("A0001", "Juan Fernandez", "Española", "Informatico y escritor", "2004-12-09", 1);
INSERT INTO AUTORES VALUES ("A0002", "Aitor Gonzalez", "Paraguaya", NULL, "1984-06-29", 1);
INSERT INTO AUTORES VALUES ("A0003", "Matt Cunninghan", "Irlandesa", "Nació en Kinsale", "1996-01-22", 0);
INSERT INTO AUTORES VALUES ("A0004", "Heung-Min Son", "Surcoreana", "Exfutbolista", "2001-11-02", 1);
INSERT INTO AUTORES VALUES ("A0005", "Gerome Croisant", "Belgicana", NULL, "1979-04-15", 0);
INSERT INTO AUTORES VALUES ("A0006", "Ana Martinez", "Española", NULL, "1993-09-17", 1);
INSERT INTO AUTORES VALUES ("A0007", "Mario Vargas Llosa", "Española", NULL, "1983-04-12", 1);

INSERT INTO ESCRITO VALUES ("L0001", "A0001");
INSERT INTO ESCRITO VALUES ("L0002", "A0002");
INSERT INTO ESCRITO VALUES ("L0003", "A0003");
INSERT INTO ESCRITO VALUES ("L0003", "A0007");
INSERT INTO ESCRITO VALUES ("L0004", "A0004");
INSERT INTO ESCRITO VALUES ("L0005", "A0005");
INSERT INTO ESCRITO VALUES ("L0005", "A0007");
INSERT INTO ESCRITO VALUES ("L0003", "A0006");
INSERT INTO ESCRITO VALUES ("L0004", "A0007");

/* Ejercicio 5 */

DELETE FROM AUTORES 
WHERE (Nombre LIKE "a%" AND Nacionalidad = "Española") 
OR (Premio_Novel = 0);

/* Ejercicio 6 */

UPDATE LIBROS 
SET Unidades = Unidades + 3 
WHERE Editorial = "Anaya";

/* Ejercicio 7 */

SELECT Cod_libro, Titulo 
FROM LIBROS 
WHERE Cod_libro IN (
    SELECT Cod_libro 
    FROM ESCRITO 
    WHERE Cod_autor = (
        SELECT Cod_autor 
        FROM AUTORES 
        WHERE Nombre = "Mario Vargas Llosa"
    )
);

/* Ejercicio 8 */

SELECT Tema, Unidades FROM LIBROS GROUP BY Unidades DESC;

/* Ejercicio 9 */

SELECT Cod_libro, Titulo FROM LIBROS WHERE Unidades = (SELECT MAX(Unidades) FROM LIBROS);
