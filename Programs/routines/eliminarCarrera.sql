DELIMITER //

CREATE procedure eliminarCarrera(
    IN _idCarrera int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idCarrera) FROM Carreras WHERE idCarrera = _idCarrera INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA CARRERA" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM Carreras WHERE idCarrera = _idCarrera;
    SELECT 1 AS Result, "CARRERA ELIMINADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
