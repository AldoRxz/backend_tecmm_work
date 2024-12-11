DELIMITER //

CREATE PROCEDURE listarOferta(
    IN _idOferta INT
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID INT;

    SELECT count(idOferta) FROM Ofertas WHERE idOferta = _idOferta INTO VALIDAR_ID;
    
    IF VALIDAR_ID < 0 THEN
        SELECT 0 AS Result, "NO EXISTE LA OFERTA" as Mensaje;
        leave sp;
    END IF;

    SELECT
    idOferta,
    nombre,
    version,
    estatus
    FROM Ofertas WHERE idOferta = _idOferta;

END;
//

DELIMITER ;
