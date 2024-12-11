DELIMITER //

CREATE procedure listarFactorSanguineos()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idFactorSanguineo,
    factor
    
    FROM factoresSanguineos;
    
END; //

DELIMITER ;
