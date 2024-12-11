DELIMITER //

CREATE procedure actualizarAspirante(
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
    
    UPDATE aspirantes SET 
        idFactorSanguineo = _idFactorSanguineo, 
        idGenero = _idGenero, 
        idConvocatoria = _idConvocatoria, 
        nombre = _nombre, 
        primerApellido = _primerApellido,
        segundoApellido = _segundoApellido, 
        telefonoCelular = _telefonoCelular, 
        correo = _correo, 
        curp = _curp, 
        paisNacimiento = _paisNacimiento, 
        estadoNacimiento = _estadoNacimiento,
        municipioNacimiento = _municipioNacimiento, 
        fechaNacimiento = _fechaNacimiento
        WHERE idAspirante = _idAspirante;
    SELECT 1 AS Result, "ASPIRANTE ACTUALIZADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
