DELIMITER //

CREATE procedure listarEtapas()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idEtapa,
    nombre
    
    FROM etapas;
    
END; //

DELIMITER ;
