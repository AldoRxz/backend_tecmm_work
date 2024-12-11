DELIMITER //

CREATE procedure eliminarBitacora(
    IN _idBitacora int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idBitacora) FROM Bitacora WHERE idBitacora = _idBitacora INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA BITACORA" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM Bitacora WHERE idBitacora = _idBitacora;
    SELECT 1 AS Result, "CUENTA ELIMINADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
