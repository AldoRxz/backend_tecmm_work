DELIMITER //

CREATE procedure registrarEtapa(
    IN _nombre varchar(100)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idEtapa) FROM etapas WHERE nombre = _nombre INTO VALIDAR_NOMBRE;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UNA ETAPA CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    INSERT INTO etapas(
        nombre) 
            VALUES(
        _nombre);
    SELECT 1 AS Result, "ETAPA REGISTRADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;


