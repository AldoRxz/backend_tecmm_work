DELIMITER //

CREATE PROCEDURE registrarProrroga(
    IN _idServicio INT,
    IN _idCliente VARCHAR(50),
    IN _detalle VARCHAR(500),
    IN _fechaExpedicion DATETIME,
    IN _fechaVencimiento DATETIME
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_IDSERVICIO int;

    SELECT count(idServicio) FROM Servicios WHERE idServicio = _idServicio INTO VALIDAR_IDSERVICIO;

    IF VALIDAR_IDSERVICIO < 1 THEN
        SELECT 1 AS Result, "NO EXISTE UN SERVICIO CON EL MISMO NUMERO" as Mensaje;
        leave sp;
    END IF;

    INSERT INTO Prorrogas (
        idServicio, 
        idCliente, 
        detalle, 
        fechaExpedicion, 
        fechaVencimiento)
    VALUES (
        _idServicio, 
        _idCliente, 
        _detalle,  
        _fechaExpedicion, 
        _fechaVencimiento);
    
    SELECT 1 AS Result, "PRORROGA REGISTRADA EXITOSAMENTE" AS Mensaje;
END //

DELIMITER ;