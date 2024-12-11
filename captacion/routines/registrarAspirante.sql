DELIMITER //

CREATE PROCEDURE registrarAspirante(
    IN _idAspirante varchar(50),
    IN _idFactorSanguineo INT,
    IN _idGenero INT,
    IN _idConvocatoria INT,
    IN _nombre varchar(500),
    IN _primerApellido varchar(500),
    IN _segundoApellido varchar(500),
    IN _telefonoCelular varchar(15),
    IN _correo varchar(500),
    IN _curp varchar(20),
    IN _paisNacimiento varchar(200),
    IN _estadoNacimiento varchar(200),
    IN _municipioNacimiento varchar(400),
    IN _fechaNacimiento DATETIME
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_FACTOR int;
    DECLARE VALIDAR_GENERO int;
    DECLARE VALIDAR_CONVOCATORIA int;

    SELECT count(idFactorSanguineo) FROM factoresSanguineos WHERE idFactorSanguineo = _idFactorSanguineo INTO VALIDAR_FACTOR;
    SELECT count(idGenero) FROM generos WHERE idGenero = _idGenero INTO VALIDAR_GENERO;
    SELECT count(idConvocatoria) FROM convocatorias WHERE idConvocatoria = _idConvocatoria INTO VALIDAR_CONVOCATORIA;


    IF VALIDAR_FACTOR < 1 THEN
        SELECT 1 AS Result, "NO EXISTE LA ID DEL EXAMEN QUE COLOCASTE" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_GENERO < 1 THEN
        SELECT 1 AS Result, "NO EXISTE LA ID DEL GENERO QUE COLOCASTE" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_CONVOCATORIA < 1 THEN
        SELECT 1 AS Result, "NO EXISTE LA ID DE LA CONVOCATORIA QUE COLOCASTE" as Mensaje;
        leave sp;
    END IF;
    
    INSERT INTO aspirantes (
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
        fechaNacimiento)
    VALUES (
        _idAspirante,
        _idFactorSanguineo, 
        _idGenero, 
        _idConvocatoria, 
        _nombre, 
        _primerApellido, 
        _segundoApellido,
        _telefonoCelular, 
        _correo, 
        _curp, 
        _paisNacimiento, 
        _estadoNacimiento,
        _municipioNacimiento, 
        _fechaNacimiento);
    
    SELECT 1 AS Result, "ASPIRANTE REGISTRADO EXITOSAMENTE" as Mensaje;
END //

DELIMITER ;
