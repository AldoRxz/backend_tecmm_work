DELIMITER //

CREATE procedure actualizarPrograma(
    IN _idPrograma int,
    IN _idCarrera INT,
    IN _idModalidad INT,
    IN _idUnidad INT,
    IN _estatus BOOL

)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;

    SELECT count(idPrograma) FROM Programas WHERE idPrograma = _idPrograma INTO VALIDAR_ID;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE EL PROGRAMA" as Mensaje;
        leave sp;
    END IF;

    UPDATE Programas SET 
    idCarrera = _idCarrera,
    idModalidad = _idModalidad,
    idUnidad = _idUnidad,
    estatus = _estatus 
        WHERE idPrograma = _idPrograma;
    SELECT 1 AS Result, "PROGRAMA ACTUALIZADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
