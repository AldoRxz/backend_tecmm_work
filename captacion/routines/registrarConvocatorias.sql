DELIMITER //

CREATE PROCEDURE registrarConvocatorias(
    IN _idExamen INT,
    IN _idOferta INT,
    IN _idPeriodo INT,
    IN _fechaInicio DATETIME,
    IN _fechaFin DATETIME,
    IN _fechaPagoExamen DATETIME,
    IN _fechaPagoInscripcion DATETIME,
    IN _fechaExamen DATETIME,
    IN _estatus ENUM('vigente', 'no vigente', 'cancelado')
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_EXAMEN int;
    DECLARE VALIDAR_FECHA int;

    SELECT count(idExamen) FROM examen WHERE idExamen = _idExamen INTO VALIDAR_EXAMEN;
    SELECT count(idConvocatoria) FROM convocatorias WHERE fechaFin > _fechaFin INTO VALIDAR_FECHA;


    IF VALIDAR_EXAMEN < 1 THEN
        SELECT 1 AS Result, "NO EXISTE LA ID DEL EXAMEN QUE COLOCASTE" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_FECHA > 1 THEN
        SELECT 1 AS Result, "LA FECHA DE FIN QUE INGRESASTE ES MENOR A UNA FECHA ANTERIOR REGISTRADA" as Mensaje;
        leave sp;
    END IF;

    IF _fechaInicio > _fechaFin THEN
        SELECT 1 AS Result, "LA FECHA DE INICIO ES MAYOR A LA FECHA DE FINAL" as Mensaje;
        leave sp;
    END IF;
    
    INSERT INTO convocatorias (
        idExamen, 
        idOferta, 
        idPeriodo, 
        fechaInicio, 
        fechaFin, 
        fechaPagoExamen, 
        fechaPagoInscripcion, 
        fechaExamen, 
        estatus)
    VALUES (
        _idExamen, 
        _idOferta, 
        _idPeriodo, 
        _fechaInicio, 
        _fechaFin, 
        _fechaPagoExamen, 
        _fechaPagoInscripcion, 
        _fechaExamen, 
        _estatus);
    
    SELECT 1 AS Result, "CONVOCATORIA REGISTRADA EXITOSAMENTE" as Mensaje;
END //

DELIMITER ;
