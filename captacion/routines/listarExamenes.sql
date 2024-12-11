DELIMITER //

CREATE procedure listarExamenes()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idExamen,
    nombre
    
    FROM examen;
    
END; //

DELIMITER ;
