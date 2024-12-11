DELIMITER //

CREATE procedure actualizarEtapa(
    IN _idEtapa int,
    IN _nombre varchar(100)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idEtapa) FROM etapas WHERE idEtapa = _idEtapa INTO VALIDAR_ID;
    SELECT count(idEtapa) FROM etapas WHERE nombre = _nombre AND idEtapa != _idEtapa INTO VALIDAR_NOMBRE;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID QUE INGRESASTE" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UNA ETAPA CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    UPDATE etapas SET 
    nombre = _nombre
        WHERE idEtapa = _idEtapa;
    SELECT 1 AS Result, "ETAPA ACTUALIZADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
