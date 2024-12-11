DELIMITER //

CREATE procedure registrarOferta(
    IN _nombre varchar(20),
    IN _version varchar(10),
    IN _estatus BOOL
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idOferta) FROM Ofertas WHERE nombre = _nombre INTO VALIDAR_NOMBRE;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UNA OFERTA CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    INSERT INTO Ofertas( 
        nombre,
        version,
        estatus) 
           VALUES( 
        _nombre,
        _version,
        _estatus);
    SELECT 1 AS Result, "OFERTA REGISTRADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
