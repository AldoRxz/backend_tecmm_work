DELIMITER //

CREATE procedure actualizarProrroga(
    IN _idProrroga INT,
    IN _idServicio INT,
    IN _idCliente VARCHAR(50),
    IN _detalle VARCHAR(500),
    IN _fechaExpedicion DATETIME,
    IN _fechaVencimiento DATETIME
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;

    SELECT count(idProrroga) FROM Prorrogas WHERE idProrroga = _idProrroga INTO VALIDAR_ID;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA PRORROGA" as Mensaje;
        leave sp;
    END IF;

    UPDATE Prorrogas SET
    idServicio = _idServicio,
    idCliente = _idCliente,
    detalle = _detalle,
    fechaExpedicion = _fechaExpedicion,
    fechaVencimiento = _fechaVencimiento
        WHERE idProrroga = _idProrroga;
    SELECT 1 AS Result, "PRORROGA ACTUALIZADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
