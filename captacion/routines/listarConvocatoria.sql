DELIMITER //

CREATE PROCEDURE listarConvocatoria(
    IN _idConvocatoria INT
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idConvocatoria) FROM convocatorias WHERE idConvocatoria = _idConvocatoria INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA CONVOCATORIA" as Mensaje;
        leave sp;
    END IF;

    SELECT
    idConvocatoria,
    idExamen, 
    idOferta, 
    idPeriodo, 
    fechaInicio, 
    fechaFin, 
    fechaPagoExamen, 
    fechaPagoInscripcion, 
    fechaExamen, 
    estatus
    FROM convocatorias WHERE idConvocatoria = _idConvocatoria;

END; //

DELIMITER ;
