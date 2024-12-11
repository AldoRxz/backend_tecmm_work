DELIMITER //

CREATE procedure listarProrrogas()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idProrroga, 
    idServicio,
    idCliente,
    detalle,
    fechaExpedicion,
    fechaVencimiento 
    
    FROM Prorrogas;
    
END; //

DELIMITER ;
