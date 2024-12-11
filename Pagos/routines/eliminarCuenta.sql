DELIMITER //

CREATE procedure eliminarCuenta(
    IN _idCuenta int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idCuenta) FROM Cuentas WHERE idCuenta = _idCuenta INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA CUENTA" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM Cuentas WHERE idCuenta = _idCuenta;
    SELECT 1 AS Result, "CUENTA ELIMINADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
