DELIMITER //

CREATE PROCEDURE listarModalidad(
    IN _idModalidad INT
)
CONTAINS SQL
sp:
BEGIN
    DECLARE modalidad_nombre VARCHAR(500);
    DECLARE resultado INT;

    SELECT nombre INTO modalidad_nombre
    FROM Modalidades
    WHERE idModalidad = _idModalidad;

    SET resultado = FOUND_ROWS();

    IF resultado > 0 THEN
        SELECT modalidad_nombre AS Result, "NOMBRE DE LA MODALIDAD" AS Mensaje;
    ELSE
        SELECT NULL AS Result, "NO SE ENCONTRÓ LA MODALIDAD" AS Mensaje;
    END IF;

END;
//

DELIMITER ;
