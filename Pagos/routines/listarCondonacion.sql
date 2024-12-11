DELIMITER //

CREATE PROCEDURE listarCondonacion(
    IN _idCliente VARCHAR(50)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idCliente) FROM Condonacion WHERE idCliente = _idCliente INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE EL CLIENTE" as Mensaje;
        leave sp;
    END IF;

    SELECT 
    idCondonacion,
    idServicio,
    idCliente,
    detalle,
    fechaExpedicion,
    estatus 
    FROM Condonacion WHERE idCliente = _idCliente;

END;
//

DELIMITER ;
