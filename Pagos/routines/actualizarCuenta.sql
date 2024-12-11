DELIMITER //

CREATE procedure actualizarCuenta(
    IN _idCuenta INT,
    IN _banco VARCHAR(100),
    IN _convenio VARCHAR(100),
    IN _claveBancaria VARCHAR(100)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;

    SELECT count(idCuenta) FROM Cuentas WHERE idCuenta = _idCuenta INTO VALIDAR_ID;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA CUENTA" as Mensaje;
        leave sp;
    END IF;

    UPDATE Cuentas SET
    banco = _banco,
    convenio = _convenio,
    claveBancaria = _claveBancaria
        WHERE idCuenta = _idCuenta;
    SELECT 1 AS Result, "CUENTA ACTUALIZADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
