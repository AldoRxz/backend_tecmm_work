DELIMITER //

CREATE PROCEDURE registrarModalidad(
    IN _idModalidad INT,
    IN _nombre varchar(500)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idModalidad) FROM Modalidades WHERE nombre = _nombre INTO VALIDAR_NOMBRE;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UNA MODALIDAD CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    INSERT INTO Modalidades(nombre) VALUES( _nombre);
    SELECT 1 AS Result, "MODALIDAD REGISTRADA EXITOSAMENTE" as Mensaje;

END;
//

DELIMITER ;