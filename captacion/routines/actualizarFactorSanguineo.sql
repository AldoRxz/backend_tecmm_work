DELIMITER //

CREATE procedure actualizarFactorSanguineo(
    IN _idFactorSanguineo int,
    IN _factor varchar(5)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
    DECLARE VALIDAR_FACTOR int;

    SELECT count(idFactorSanguineo) FROM factoresSanguineos WHERE idFactorSanguineo = _idFactorSanguineo INTO VALIDAR_ID;
    SELECT count(idFactorSanguineo) FROM factoresSanguineos WHERE factor = _factor AND idFactorSanguineo != _idFactorSanguineo INTO VALIDAR_FACTOR;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID DEL FACTOR SANGUINEO" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_FACTOR > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UN FACTOR SANGUINEO IGUAL" as Mensaje;
        leave sp;
    END IF;

    UPDATE factoresSanguineos SET 
    factor = _factor
        WHERE idFactorSanguineo = _idFactorSanguineo;
    SELECT 1 AS Result, "FACTOR SANGUINEO ACTUALIZADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
