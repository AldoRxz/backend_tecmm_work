DELIMITER //

CREATE PROCEDURE listarAspirante(
    IN _idAspirante varchar(50)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idAspirante) FROM aspirantes WHERE idAspirante = _idAspirante INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID DEL ASPIRANTE QUE COLOCASTE" as Mensaje;
        leave sp;
    END IF;

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
    FROM aspirantes WHERE idAspirante = _idAspirante;

END; //

DELIMITER ;
