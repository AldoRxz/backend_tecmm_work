DELIMITER //

CREATE PROCEDURE listarTarjeta(
    IN _idCliente VARCHAR(50)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idCliente) FROM Tarjetas WHERE idCliente = _idCliente INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE El CLIENTE" as Mensaje;
        leave sp;
    END IF;

    SELECT
    idTarjeta, 
    idCliente, 
    nombre, 
    correo, 
    bin, 
    token, 
    anioExpiracion, 
    mesExpiracion, 
    tipo, 
    terminacion
    FROM Tarjetas WHERE idCliente = _idCliente;

END;
//

DELIMITER ;
