DELIMITER //

CREATE procedure actualizarEspecialidad(
    IN _idEspecialidad INT,
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
    DECLARE VALIDAR_ID int;
    DECLARE VALIDAR_NOMBRE int;

    SELECT count(idEspecialidad) FROM Especialidades WHERE idEspecialidad = _idEspecialidad INTO VALIDAR_ID;
    SELECT count(idEspecialidad) FROM Especialidades WHERE nombre = _nombre AND idEspecialidad != idEspecialidad INTO VALIDAR_NOMBRE;

    IF VALIDAR_ID < 1 THEN
        SELECT 0 AS Result, "NO EXISTE LA ESPECIALIDAD" as Mensaje;
        leave sp;
    END IF;

    IF VALIDAR_NOMBRE > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UNA ESPECIALIDAD CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;

    UPDATE Especialidades SET
    idUnidad = _idUnidad,
    codigo = _codigo,
    nombreCorto = _nombreCorto, 
    nombre = _nombre,
    creditos = _creditos,
    estatus = _estatus 
        WHERE idEspecialidad = _idEspecialidad;
    SELECT 1 AS Result, "ESPECIALIDAD ACTUALIZADA EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;
