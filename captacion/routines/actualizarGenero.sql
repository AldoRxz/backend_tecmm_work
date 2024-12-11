DELIMITER //

CREATE procedure actualizarGenero(
    IN _idGenero int,
    IN _genero varchar(50)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
    DECLARE VALIDAR_GENERO int;

    SELECT count(idGenero) FROM generos WHERE idGenero = _idGenero INTO VALIDAR_ID;
    SELECT count(idGenero) FROM generos WHERE genero = _genero AND idGenero != _idGenero INTO VALIDAR_GENERO;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID DEL GENERO" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_GENERO > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UN GENERO REGISTRADO IGUAL" as Mensaje;
        leave sp;
    END IF;

    UPDATE generos SET 
    genero = _genero
        WHERE idGenero = _idGenero;
    SELECT 1 AS Result, "GENERO ACTUALIZADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
