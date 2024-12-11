DELIMITER //

CREATE procedure listarMedicos()
CONTAINS SQL
sp:
BEGIN
    SELECT 
    idMedico,
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
    direccionTutor
    
    FROM medico;
    
END; //

DELIMITER ;
