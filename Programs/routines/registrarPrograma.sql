DELIMITER //

CREATE procedure registrarPrograma(
    IN _idCarrera INT,
    IN _idModalidad INT,
    IN _idUnidad INT,
    IN _estatus BOOL
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_IDCARRERA int;
    DECLARE VALIDAR_IDMODALIDAD int;
    DECLARE VALIDAR_IDUNIDAD int;


    SELECT count(idCarrera) FROM Carreras WHERE idCarrera = _idCarrera INTO VALIDAR_IDCARRERA;
    SELECT count(idModalidad) FROM Modalidades WHERE idModalidad = _idModalidad INTO VALIDAR_IDMODALIDAD;
    SELECT count(idUnidad) FROM Unidades WHERE idUnidad = _idUnidad INTO VALIDAR_IDUNIDAD;


    IF VALIDAR_IDCARRERA < 1 THEN
        SELECT 1 AS Result, "NO EXISTE UNA CARRERA CON EL MISMO NUMERO" as Mensaje;
        leave sp;
    END IF;

     IF VALIDAR_IDMODALIDAD < 1 THEN
        SELECT 1 AS Result, "NO EXISTE UNA MODALIDAD CON EL MISMO NUMERO" as Mensaje;
        leave sp;
    END IF;

     IF VALIDAR_IDUNIDAD < 1 THEN
        SELECT 1 AS Result, "NO EXISTE UNA UNIDAD CON EL MISMO NUMERO" as Mensaje;
        leave sp;
    END IF;

    INSERT INTO Programas(
        idCarrera,
        idModalidad,
        idUnidad, 
        estatus) 
            VALUES(
        _idCarrera,
        _idModalidad,
        _idUnidad, 
        _estatus);
    SELECT 1 AS Result, "PROGRAMA REGISTRADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
