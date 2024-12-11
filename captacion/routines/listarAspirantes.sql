DELIMITER //

CREATE procedure listarAspirantes()
CONTAINS SQL
sp:
BEGIN
    SELECT
    idAspirante, 
    idFactorSanguineo, 
    idGenero, 
    idConvocatoria, 
    nombre, 
    primerApellido, 
    segundoApellido,
    telefonoCelular, 
    correo, 
    curp, 
    paisNacimiento, 
    estadoNacimiento,
    municipioNacimiento, 
    fechaNacimiento
    
    FROM aspirantes;
    
END; //

DELIMITER ;
