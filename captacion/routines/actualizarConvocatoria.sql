DELIMITER //

CREATE procedure actualizarConvocatoria(
    IN _idConvocatoria int,
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
    DECLARE VALIDAR_ID int;
    DECLARE VALIDAR_EXAMEN int;
    DECLARE VALIDAR_FECHA int;

    SELECT count(idConvocatoria) FROM convocatorias WHERE idConvocatoria = _idConvocatoria INTO VALIDAR_ID;
    SELECT count(idExamen) FROM examen WHERE idExamen = _idExamen INTO VALIDAR_EXAMEN;
    SELECT count(idConvocatoria) FROM convocatorias WHERE fechaFin > _fechaFin INTO VALIDAR_FECHA;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID QUE INGRESASTE" as Mensaje;
        leave sp;
    END IF;

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

    UPDATE convocatorias SET 
        idExamen = _idExamen, 
        idOferta = _idOferta, 
        idPeriodo = _idPeriodo, 
        fechaInicio = _fechaInicio, 
        fechaFin = _fechaFin, 
        fechaPagoExamen = _fechaPagoExamen, 
        fechaPagoInscripcion = _fechaPagoInscripcion, 
        fechaExamen = _fechaExamen, 
        estatus = _estatus
        WHERE idConvocatoria = _idConvocatoria;
    SELECT 1 AS Result, "CONVOCATORIA ACTUALIZADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
