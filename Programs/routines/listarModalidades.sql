DELIMITER //

CREATE procedure listarModalidades()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idModalidad, 
    nombre 
    
    FROM Modalidades;
    
END; //

DELIMITER ;
