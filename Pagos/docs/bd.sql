CREATE TABLE Servicios(
    idServicio int AUTO_INCREMENT,
    servicio varchar(500),
    monto decimal(7,2),
    fechaInicio datetime,
    fechaVencimiento datetime,
    estatus boolean DEFAULT TRUE,
    PRIMARY KEY(idServicio)
);

INSERT INTO Servicios(servicio, monto, fechaInicio, fechaVencimiento) VALUES("prueba", 200.00, "2023-01-01 00:00:00", "2023-12-31 23:59:59");
UPDATE Servicios SET servicio = "prueba2" WHERE idServicio = 8; 

DELIMITER $$

CREATE TRIGGER before_servicios_insert
BEFORE INSERT
ON Servicios FOR EACH ROW
BEGIN
    DECLARE _validar_servicio int;
    SELECT COUNT(idServicio) FROM Servicios WHERE servicio = NEW.servicio AND estatus = TRUE INTO _validar_servicio;

    if(_validar_servicio > 0) THEN
        signal sqlstate '45000' set message_text = "No se puede insertar el servicio. Ya existe un servicio activo con el mismo nombre";
    END IF;
END $$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER before_servicios_update
BEFORE UPDATE
ON Servicios FOR EACH ROW
BEGIN
    DECLARE _validar_servicio int;

    SELECT COUNT(idServicio) FROM Servicios WHERE servicio = NEW.servicio AND estatus = TRUE AND idServicio != NEW.idServicio INTO _validar_servicio;

    if(_validar_servicio > 0) THEN
        signal sqlstate '45000' set message_text = "No se puede actualizar el servicio. Ya existe un servicio activo con el mismo nombre";
    END IF;
END $$

DELIMITER ;


CREATE TABLE Cargos(
    idCargo int AUTO_INCREMENT,
    idServicio int,
    idCliente varchar(30),
    periodo int,
    tipo enum("alumno", "aspirante", "proveedor"),
    fechaExpedicion datetime,
    estatus enum("Activo", "Pagado", "Vencido", "Cancelado"),
    PRIMARY KEY(idCargo),
    FOREIGN KEY(idServicio) REFERENCES Servicios(idServicio)
);

INSERT INTO Cargos(idServicio, idCliente, periodo, tipo, fechaExpedicion, estatus) VALUES(1, "AUPH993344", 75, "alumno", "2023-10-20 13:54:20", "Activo");

DELIMITER $$

CREATE TRIGGER before_cargos_insert
BEFORE INSERT
ON Cargos FOR EACH ROW
BEGIN
    DECLARE _validar_servicio int;

    SELECT COUNT(idServicio) FROM Servicios WHERE estatus = TRUE AND idServicio != NEW.idServicio INTO _validar_servicio;

    if(_validar_servicio < 1) THEN
        signal sqlstate '45000' set message_text = "No se puede registrar el cargo. no existe un servicio activo con el mismo id";
    END IF;

END $$

DELIMITER ;


CREATE TABLE Prorrogas(
    idProrroga int AUTO_INCREMENT,
    idServicio int NOT NULL,
    idCliente varchar(50),
    detalle varchar(500),
    fechaExpedicion datetime,
    fechaVencimiento datetime,
    PRIMARY KEY(idProrroga),
    FOREIGN KEY(idServicio) REFERENCES Servicios(idServicio)
);

CREATE TABLE Condonacion(
    idCondonacion int AUTO_INCREMENT,
    idServicio int NOT NULL,
    idCliente varchar(50),
    detalle varchar(500),
    fechaExpedicion datetime,
    estatus enum("elaborado", "validado", "verificado", "autorizado")
    PRIMARY KEY(idCondonacion),
    FOREIGN KEY(idServicio) REFERENCES Servicios(idServicio)
);

CREATE TABLE Pagos(
    idPago int AUTO_INCREMENT,
    idCargo int NOT NULL,
    tipo enum("Ficha", "Tarjeta", "Ventanilla"),
    detalle varchar(500),
    fechaPago datetime,
    PRIMARY KEY(idPago),
    FOREIGN KEY(idCargo) REFERENCES Cargos(idCargo)
);

CREATE TABLE Facturacion(
    idFacturacion int NOT NULL AUTO_INCREMENT,
    idCargo int,
    idCliente varchar(50),
    nombre varchar(500),
    rfc varchar(40),
    correo varchar(500),
    estado varchar(100),
    ciudad varchar(200),
    municipio varchar(200),
    cp varchar(10),
    calle varchar(200),
    numeroExterior varchar(15),
    numeroInterior varchar(15),
    servicio varchar(100),
    monto decimal(8,2),
    uso varchar(100),
    telefono varchar(20),
    fechaSolicitud datetime,
    tipo varchar(500),
    PRIMARY KEY(idFacturacion),
    FOREIGN KEY(idCargo) REFERENCES Cargos(idCargo)
);

CREATE TABLE Cuentas(
    idCuenta int AUTO_INCREMENT,
    banco varchar(100),
    convenio varchar(100),
    claveBancaria varchar(100),
    PRIMARY KEY(idCuenta)
);

CREATE TABLE Tarjetas(
    idTarjeta int AUTO_INCREMENT,
    idCliente varchar(50),
    nombre varchar(400),
    correo varchar(400),
    bin varchar(20),
    token varchar(50),
    anioExpiracion varchar(5),
    mesExpiracion varchar(3),
    tipo enum("vi", "mc"),
    terminacion varchar(5),
    PRIMARY KEY(idTarjeta)
);

CREATE TABLE Bitacora(
    idBitacora int AUTO_INCREMENT,
    referencia varchar(50),
    monto decimal(8,2),
    fecha datetime,
    estatus boolean DEFAULT TRUE,
    PRIMARY KEY(idBitacora)
);

CREATE TABLE Sobrecargos(
    idSobrecargo int AUTO_INCREMENT,
    PRIMARY KEY(idSobrecargo)
);

CREATE TABLE Descuentos(
    idDescuentos int AUTO_INCREMENT,
    PRIMARY KEY(idDescuentos)
);

CREATE USER 'pagos'@'%' IDENTIFIED BY '#pagos1234!';

GRANT USAGE ON Pagos.* TO 'pagos'@'%' IDENTIFIED BY '#pagos1234!';

GRANT ALL privileges ON `Pagos`.* TO 'pagos'@'%' IDENTIFIED BY '#pagos1234!';