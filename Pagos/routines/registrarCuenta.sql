DELIMITER //

CREATE PROCEDURE registrarCuenta(
    IN _banco VARCHAR(100),
    IN _convenio VARCHAR(100),
    IN _claveBancaria VARCHAR(100)
)
CONTAINS SQL
sp:
BEGIN

    INSERT INTO Cuentas (
        banco,
        convenio,
        claveBancaria)
    VALUES (
        _banco,
        _convenio,
        _claveBancaria);
    
    SELECT 1 AS Result, "CUENTA REGISTRADA EXITOSAMENTE" AS Mensaje;
END //

DELIMITER ;