DELIMITER //

CREATE procedure eliminarPrograma(
    IN _idPrograma int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idPrograma) FROM Programas WHERE idPrograma = _idPrograma INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE EL PROGRAMA" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM Programas WHERE idPrograma = _idPrograma;
    SELECT 1 AS Result, "PROGRAMA ELIMINADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
