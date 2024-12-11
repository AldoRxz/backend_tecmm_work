DELIMITER //

CREATE procedure listarCarreras()
CONTAINS SQL
sp:
BEGIN
    SELECT idCarrera, nombreCorto, nombre FROM Carreras;
END; //

DELIMITER ;
