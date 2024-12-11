DELIMITER //

CREATE PROCEDURE listarPrograma(
    IN _idPrograma INT
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idPrograma) FROM Programas WHERE idPrograma = _idPrograma INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE EL PROGRAMA" as Mensaje;
        leave sp;
    END IF;

    SELECT
    idPrograma,
    idCarrera,
    idModalidad,
    idUnidad,
    estatus
    FROM Programas WHERE idPrograma = _idPrograma;

END;
//

DELIMITER ;
