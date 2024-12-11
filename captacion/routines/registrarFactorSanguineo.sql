DELIMITER //

CREATE procedure registrarFactorSanguineo(
    IN _factor varchar(5)
)
CONTAINS SQL
sp:
BEGIN
    DECLARE VALIDAR_FACTOR int;

    SELECT count(idFactorSanguineo) FROM factoresSanguineos WHERE factor = _factor INTO VALIDAR_FACTOR;

    IF VALIDAR_FACTOR > 0 THEN
        SELECT 0 AS Result, "YA EXISTE UN FACTOR SANGUINEO CON EL MISMO NOMBRE" as Mensaje;
        leave sp;
    END IF;
    
    INSERT INTO factoresSanguineos(
        factor) 
            VALUES(
        _factor);
    SELECT 1 AS Result, "FACTOR SANGUINEO REGISTRADO EXITOSAMENTE" as Mensaje;

END; //

DELIMITER ;


