DELIMITER //

CREATE procedure registrarGenero(
    IN _genero varchar(50)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_GENERO int;

    SELECT count(idGenero) FROM generos WHERE genero = _genero INTO VALIDAR_GENERO;

    IF VALIDAR_GENERO > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UN MISMO GENERO REGISTRADO CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    INSERT INTO generos(
        genero) 
            VALUES(
        _genero);
    SELECT 1 AS Result, "GENERO REGISTRADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;


