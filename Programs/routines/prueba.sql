DELIMITER //

CREATE procedure enviar(
    IN _folio varchar(20),
    IN _lote varchar(15)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE _validar_folio int;
    SELECT COUNT(folio) FROM xmlTitulo WHERE folio = _folio INTO _validar_folio;

    IF _validar_folio < 1 THEN
        SELECT 0 AS result, "El folio no existe" AS Descripcion;
        leave sp; 
    END IF;

    UPDATE xmlTitulo SET lote = _lote, proceso = "Enviado" WHERE folio = _folio; 

    SELECT 1 AS result;
END; //

DELIMITER ;
