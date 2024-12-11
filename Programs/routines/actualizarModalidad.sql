DELIMITER //

CREATE procedure actualizarModalidad(
    IN _idModalidad int,
    IN _nombre varchar(500)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idModalidad) FROM Modalidades WHERE idModalidad = _idModalidad INTO VALIDAR_ID;
    SELECT count(idModalidad) FROM Modalidades WHERE nombre = _nombre AND idModalidad != idModalidad INTO VALIDAR_NOMBRE;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA MODALIDAD" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UNA MODALIDAD CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    UPDATE Modalidades SET nombre = _nombre WHERE idModalidad = _idModalidad;
    SELECT 1 AS Result, "MODALIDAD ACTUALIZADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
