DELIMITER //

CREATE procedure listarBitacoras()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idBitacora,
    referencia,
    monto,
    fecha,
    estatus 
    
    FROM Bitacora;
    
END; //

DELIMITER ;
