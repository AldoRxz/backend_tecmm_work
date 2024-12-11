DELIMITER //

CREATE procedure eliminarOferta(
    IN _idOferta int
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
   
    SELECT count(idOferta) FROM Ofertas WHERE idOferta = _idOferta INTO VALIDAR_ID;
   
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA OFERTA" as Mensaje;
        leave sp;
    END IF;

    
    DELETE FROM Ofertas WHERE idOferta = _idOferta;
    SELECT 1 AS Result, "OFERTA ELIMINADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
