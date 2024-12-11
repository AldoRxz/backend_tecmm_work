DELIMITER //

CREATE procedure eliminarExamen(
    IN _idExamen int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idExamen) FROM examen WHERE idExamen = _idExamen INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID DEL EXAMEN" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM examen WHERE idExamen = _idExamen;
    SELECT 1 AS Result, "EXAMEN ELIMINADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
