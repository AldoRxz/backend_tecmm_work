DELIMITER //

CREATE procedure eliminarModalidad(
    IN _idModalidad int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idModalidad) FROM Modalidades WHERE idModalidad = _idModalidad INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA MODALIDAD" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM Modalidades WHERE idModalidad = _idModalidad;
    SELECT 1 AS Result, "MODALIDAD ELIMINADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
