DELIMITER //

CREATE procedure listarConvocatorias()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idConvocatoria,
    idExamen, 
    idOferta, 
    idPeriodo, 
    fechaInicio, 
    fechaFin, 
    fechaPagoExamen, 
    fechaPagoInscripcion, 
    fechaExamen, 
    estatus
    
    FROM convocatorias;
    
END; //

DELIMITER ;
