DELIMITER //

CREATE procedure eliminarEspecialidad(
    IN _idEspecialidad int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idEspecialidad) FROM Especialidades WHERE idEspecialidad = _idEspecialidad INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA MODALIDAD" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM Especialidades WHERE idEspecialidad = _idEspecialidad;
    SELECT 1 AS Result, "MODALIDAD ELIMINADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
