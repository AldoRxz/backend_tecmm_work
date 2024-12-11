DELIMITER //

CREATE procedure listarCondonaciones()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idCondonacion,
    idServicio,
    idCliente,
    detalle,
    fechaExpedicion,
    estatus 
    
    FROM Condonacion;
    
END; //

DELIMITER ;
