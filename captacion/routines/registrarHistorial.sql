DELIMITER //

CREATE PROCEDURE registrarHistorial(
    IN _idAspirante varchar(50),
    IN _idEtapa INT,
    IN _fecha DATETIME
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ASPIRANTE int;
    DECLARE VALIDAR_ETAPA int;

    SELECT count(idAspirante) FROM aspirantes WHERE idAspirante = _idAspirante INTO VALIDAR_ASPIRANTE;
    SELECT count(idEtapa) FROM etapas WHERE idEtapa = _idEtapa INTO VALIDAR_ETAPA;


    IF VALIDAR_ASPIRANTE < 1 THEN
        SELECT 1 AS Result, "NO EXISTE EL ASPIRANTE" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_ETAPA < 1 THEN
        SELECT 1 AS Result, "NO EXISTE LA ETAPA QUE COLOCASATE" as Mensaje;
        leave sp;
    END IF;

    
    INSERT INTO historialEtapas (
        idAspirante,
        idEtapa,
        fecha)
    VALUES (
        _idAspirante,
        _idEtapa,
        _fecha);
    
    SELECT 1 AS Result, "HISTORIAL REGISTRADO EXITOSAMENTE" as Mensaje;
END //

DELIMITER ;
