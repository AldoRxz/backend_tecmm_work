DELIMITER //

CREATE procedure listarProgramas()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idPrograma, 
    idCarrera,
    idModalidad,
    idUnidad,
    estatus 
    
    FROM Programas;
    
END; //

DELIMITER ;
