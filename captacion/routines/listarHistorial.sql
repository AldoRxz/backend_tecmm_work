DELIMITER //

CREATE PROCEDURE listarHistorial(
    IN _idAspirante varchar(50)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idHistorial) FROM historialEtapas WHERE idAspirante = _idAspirante INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE EL ASPIRANTE" as Mensaje;
        leave sp;
    END IF;

    SELECT
    idHistorial,
    idAspirante,
    idEtapa,
    fecha
    FROM historialEtapas WHERE idAspirante = _idAspirante;

END; //

DELIMITER ;
