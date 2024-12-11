DELIMITER //

CREATE PROCEDURE listarEspecialidad(
    IN _idEspecialidad INT
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idEspecialidad) FROM Especialidades WHERE idEspecialidad = _idEspecialidad INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA ESPECIALIDAD" as Mensaje;
        leave sp;
    END IF;

    SELECT
    idEspecialidad,
    idUnidad,
    codigo,
    nombreCorto,
    nombre,
    creditos,
    estatus
    FROM Especialidades WHERE idEspecialidad = _idEspecialidad;

END;
//

DELIMITER ;
