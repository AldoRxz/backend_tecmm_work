DELIMITER //

CREATE procedure actualizarOferta(
    IN _idOferta int,
    IN _nombre varchar(20),
    IN _version varchar(10),
    IN _estatus BOOL

)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_ID int;
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idOferta) FROM Ofertas WHERE idOferta = _idOferta INTO VALIDAR_ID;
    SELECT count(idOferta) FROM Ofertas WHERE nombre = _nombre AND idOferta != idOferta INTO VALIDAR_NOMBRE;


    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA OFERTA" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UNA MODALIDAD CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    UPDATE Ofertas SET 
    nombre = _nombre,
    version = _version,
    estatus = _estatus 
        WHERE idOferta = _idOferta;
    SELECT 1 AS Result, "OFERTA ACTUALIZADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
