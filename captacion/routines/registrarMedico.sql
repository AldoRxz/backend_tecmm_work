DELIMITER //

CREATE PROCEDURE registrarMedico(
    IN _idAspirante varchar(50),
    IN _idTipoSeguros INT,
    IN _numeroSeguro varchar(30),
    IN _numeroClinica varchar(20),
    IN _contactoEmergencia varchar(20),
    IN _tutor varchar(500),
    IN _telefonoTutor varchar(20),
    IN _paisTutor varchar(200),
    IN _estadoTutor varchar(200),
    IN _municipioTutor varchar(400),
    IN _coloniaTutor varchar(400),
    IN _direccionTutor varchar(500)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ASPIRANTE int;
    DECLARE VALIDAR_TIPO int;

    SELECT count(idAspirante) FROM aspirantes WHERE idAspirante = _idAspirante INTO VALIDAR_ASPIRANTE;
    SELECT count(idTipoSeguros) FROM tipoSeguros WHERE idTipoSeguros = _idTipoSeguros INTO VALIDAR_TIPO;


    IF VALIDAR_ASPIRANTE < 1 THEN
        SELECT 1 AS Result, "NO EXISTE EL ASPIRANTE" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_TIPO < 1 THEN
        SELECT 1 AS Result, "NO EXISTE EL TIPO DE SEGURO QUE COLOCASATE" as Mensaje;
        leave sp;
    END IF;

    
    INSERT INTO medico (
        idAspirante,
        idTipoSeguros,
        numeroSeguro,
        numeroClinica,
        contactoEmergencia,
        tutor,
        telefonoTutor,
        paisTutor,
        estadoTutor,
        municipioTutor,
        coloniaTutor,
        direccionTutor)
    VALUES (
        _idAspirante,
        _idTipoSeguros,
        _numeroSeguro,
        _numeroClinica,
        _contactoEmergencia,
        _tutor,
        _telefonoTutor,
        _paisTutor,
        _estadoTutor,
        _municipioTutor,
        _coloniaTutor,
        _direccionTutor);
    
    SELECT 1 AS Result, "MEDICO REGISTRADO EXITOSAMENTE" as Mensaje;
END //

DELIMITER ;
