DELIMITER //

CREATE procedure registrarCarrera(
    IN _nombreCorto varchar(250),
    IN _nombre varchar(500)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idCarrera) FROM Carreras WHERE nombre = _nombre INTO VALIDAR_NOMBRE;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UNA CARRERA CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    INSERT INTO Carreras(nombreCorto, nombre) VALUES(_nombreCorto, _nombre);
    SELECT 1 AS Result, "CARRERA REGISTRADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
