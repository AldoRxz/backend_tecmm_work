DELIMITER //

CREATE PROCEDURE registrarCondonacion(
    IN _idServicio INT,
    IN _idCliente VARCHAR(50),
    IN _detalle VARCHAR(500),
    IN _fechaExpedicion DATETIME,
    IN _estatus ENUM('elaborado', 'validado', 'verificado', 'autorizado')
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

    INSERT INTO Condonacion (
        idServicio, 
        idCliente, 
        detalle, 
        fechaExpedicion, 
        estatus)
    VALUES (
        _idServicio, 
        _idCliente, 
        _detalle,  
        _fechaExpedicion, 
        _estatus);
    
    SELECT 1 AS Result, "CONDONACION REGISTRADA EXITOSAMENTE" AS Mensaje;
END //

DELIMITER ;