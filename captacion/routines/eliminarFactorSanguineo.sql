DELIMITER //

CREATE procedure eliminarFactorSanguineo(
    IN _idFactorSanguineo int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idFactorSanguineo) FROM factoresSanguineos WHERE idFactorSanguineo = _idFactorSanguineo INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID DEL FACTOR SANGUINEO" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM factoresSanguineos WHERE idFactorSanguineo = _idFactorSanguineo;
    SELECT 1 AS Result, "FACTOR SANGUINEO ELIMINADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
