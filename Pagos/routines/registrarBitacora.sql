DELIMITER //

CREATE PROCEDURE registrarBitacora(
    IN _referencia VARCHAR(50),
    IN _monto DECIMAL(8,2),
    IN _fecha DATETIME,
    IN _estatus BOOL

)
CONTAINS SQL
sp:
BEGIN

    INSERT INTO Bitacora (
        referencia,
        monto,
        fecha,
        estatus)
    VALUES (
        _referencia,
        _monto,
        _fecha,
        _estatus);
    
    SELECT 1 AS Result, "BITACORA REGISTRADA EXITOSAMENTE" AS Mensaje;
END //

DELIMITER ;