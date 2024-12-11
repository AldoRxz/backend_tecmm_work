DELIMITER //

CREATE procedure listarGenero()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idGenero,
    genero
    
    FROM generos;
    
END; //

DELIMITER ;
