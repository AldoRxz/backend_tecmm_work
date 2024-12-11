DELIMITER //

CREATE procedure eliminarEtapa(
    IN _idEtapa int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idEtapa) FROM etapas WHERE idEtapa = _idEtapa INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID DE LA ETAPA" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM etapas WHERE idEtapa = _idEtapa;
    SELECT 1 AS Result, "ETAPA ELIMINADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
