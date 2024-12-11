DELIMITER //

CREATE procedure listarEspecialidades()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idEspecialidad,
    idUnidad,
    codigo,
    nombreCorto,
    nombre,
    creditos,
    estatus 
    
    FROM Especialidades;
    
END; //

DELIMITER ;
