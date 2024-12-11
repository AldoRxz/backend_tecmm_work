DELIMITER //

CREATE procedure eliminarConvocatoria(
    IN _idConvocatoria int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idConvocatoria) FROM convocatorias WHERE idConvocatoria = _idConvocatoria INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ID DE LA CONVOCATORIA QUE QUIERES ELIMINAR" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM convocatorias WHERE idConvocatoria = _idConvocatoria;
    SELECT 1 AS Result, "CONVOCATORIA ELIMINADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
