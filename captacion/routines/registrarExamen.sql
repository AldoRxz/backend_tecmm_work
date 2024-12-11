DELIMITER //

CREATE procedure registrarExamen(
    IN _nombre varchar(100)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idExamen) FROM examen WHERE nombre = _nombre INTO VALIDAR_NOMBRE;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UN EXAMEN CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    INSERT INTO examen(
        nombre) 
            VALUES(
        _nombre);
    SELECT 1 AS Result, "EXAMEN REGISTRADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;


