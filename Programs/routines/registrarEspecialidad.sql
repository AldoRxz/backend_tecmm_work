DELIMITER //

CREATE procedure registrarEspecialidad(
    IN _idUnidad INT,
    IN _codigo varchar(250),
    IN _nombreCorto varchar(250),
    IN _nombre varchar(500),
    IN _creditos INT,
    IN _estatus BOOL
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_NOMBRE int;
    DECLARE VALIDAR_IDUNIDAD int;

    SELECT count(idEspecialidad) FROM Especialidades WHERE nombre = _nombre INTO VALIDAR_NOMBRE;
    SELECT count(idUnidad) FROM Unidades WHERE idUnidad = _idUnidad INTO VALIDAR_IDUNIDAD;


    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UNA ESPECIALIDAD CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;


    IF VALIDAR_IDUNIDAD < 1 THEN
        SELECT 1 AS Result, "NO EXISTE UNA UNIDAD CON EL MISMO NUMERO" as Mensaje;
        leave sp;
    END IF;


    INSERT INTO Especialidades(
        idUnidad, 
        codigo, 
        nombreCorto, 
        nombre, 
        creditos, 
        estatus) 
            VALUES(
        _idUnidad, 
        _codigo, 
        _nombreCorto, 
        _nombre, 
        _creditos, 
        _estatus);
    SELECT 1 AS Result, "ESPECIALIDAD REGISTRADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
