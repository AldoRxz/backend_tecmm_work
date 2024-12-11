DELIMITER //

CREATE procedure listarOfertas()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idOferta,
    nombre,
    version,
    estatus
    
    FROM Ofertas;
    
END; //

DELIMITER ;
