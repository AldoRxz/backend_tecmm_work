DELIMITER //

CREATE procedure actualizarExamen(
    IN _idExamen int,
    IN _nombre varchar(100)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idExamen) FROM examen WHERE idExamen = _idExamen INTO VALIDAR_ID;
    SELECT count(idExamen) FROM examen WHERE nombre = _nombre AND idExamen != _idExamen INTO VALIDAR_NOMBRE;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID DEL EXAMEN" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UN EXAMEN CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    UPDATE examen SET 
    nombre = _nombre
        WHERE idExamen = _idExamen;
    SELECT 1 AS Result, "EXAMEN ACTUALIZADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
