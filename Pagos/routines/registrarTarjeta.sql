DELIMITER //

CREATE PROCEDURE registrarTarjeta(
    IN _idCliente VARCHAR(50),
    IN _nombre VARCHAR(400),
    IN _correo VARCHAR(400),
    IN _bin VARCHAR(20),        
    IN _token VARCHAR(50),
    IN _anioExpiracion VARCHAR(5),
    IN _mesExpiracion VARCHAR(3),
    IN _tipo ENUM('vi', 'mc'),
    IN _terminacion VARCHAR(5)
)
CONTAINS SQL
sp:
BEGIN

    INSERT INTO Tarjetas ( 
        idCliente, 
        nombre, 
        correo, 
        bin, 
        token, 
        anioExpiracion, 
        mesExpiracion, 
        tipo, 
        terminacion)
    VALUES (
        _idCliente, 
        _nombre, 
        _correo, 
        _bin, 
        _token, 
        _anioExpiracion, 
        _mesExpiracion, 
        _tipo, 
        _terminacion);
    
    SELECT 1 AS Result, "TARJETA REGISTRADA EXITOSAMENTE" AS Mensaje;
END //

DELIMITER ;