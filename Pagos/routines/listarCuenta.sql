DELIMITER //

CREATE PROCEDURE listarCuenta(
    IN _idCuenta VARCHAR(50)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idCuenta) FROM Cuentas WHERE idCuenta = _idCuenta INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA CUENTA" as Mensaje;
        leave sp;
    END IF;

    SELECT
    idCuenta, 
    banco,
    convenio,
    claveBancaria
    FROM Cuentas WHERE idCuenta = _idCuenta;

END;
//

DELIMITER ;
