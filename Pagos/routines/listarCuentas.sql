DELIMITER //

CREATE procedure listarCuentas()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idCuenta, 
    banco,
    convenio,
    claveBancaria 
    
    FROM Cuentas;
    
END; //

DELIMITER ;
