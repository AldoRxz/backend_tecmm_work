DELIMITER //

CREATE procedure eliminarGenero(
    IN _idGenero int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idGenero) FROM generos WHERE idGenero = _idGenero INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM generos WHERE idGenero = _idGenero;
    SELECT 1 AS Result, "GENERO ELIMINADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
