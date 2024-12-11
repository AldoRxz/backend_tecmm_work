DELIMITER //

CREATE PROCEDURE listarProrrogaCliente(
    IN _idCliente VARCHAR(50)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idCliente) FROM Prorrogas WHERE idCliente = _idCliente INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE El CLIENTE" as Mensaje;
        leave sp;
    END IF;

    SELECT
    idProrroga, 
    idServicio,
    idCliente,
    detalle,
    fechaExpedicion,
    fechaVencimiento 
    FROM Prorrogas WHERE idCliente = _idCliente;

END;
//

DELIMITER ;
