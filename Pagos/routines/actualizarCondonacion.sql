DELIMITER //

CREATE procedure actualizarCondonacion(
    IN _idCondonacion INT,
    IN _idServicio INT,
    IN _idCliente VARCHAR(50),
    IN _detalle VARCHAR(500),
    IN _fechaExpedicion DATETIME,
    IN _estatus ENUM('elaborado', 'validado', 'verificado', 'autorizado')
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
    DECLARE VALIDAR_IDSERVICIO int;

    SELECT count(idCondonacion) FROM Condonacion WHERE idCondonacion = _idCondonacion INTO VALIDAR_ID;
    SELECT count(idServicio) FROM Servicios WHERE idServicio = _idServicio INTO VALIDAR_IDSERVICIO;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA CONDONACION" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_IDSERVICIO < 1 THEN
        SELECT 1 AS Result, "NO EXISTE UN SERVICIO CON EL MISMO NUMERO" as Mensaje;
        leave sp;
    END IF;
    
    UPDATE Condonacion SET
    idServicio = _idServicio,
    idCliente = _idCliente,
    detalle = _detalle,
    fechaExpedicion = _fechaExpedicion,
    estatus = _estatus
        WHERE idCondonacion = _idCondonacion;
    SELECT 1 AS Result, "CONDONACION ACTUALIZADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
