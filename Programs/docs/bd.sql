CREATE TABLE Unidades(
    idUnidad int AUTO_INCREMENT,
    nombreCorto varchar(250),
    nombre varchar(500) NOT NULL,
    PRIMARY KEY(idUnidad)
);

INSERT INTO Unidades(idUnidad, nombreCorto, nombre)
VALUES
(1,  "DIR. GENERAL", "DIRECCIÓN GENERAL"),
(2,  "ZAPOPAN", "ZAPOPAN"),
(3,  "PUERTO VALLARTA", "PUERTO VALLARTA"),
(4,  "CHAPALA", "CHAPALA"),
(5,  "ARANDAS", "ARANDAS"),
(6,  "EL GRULLO", "EL GRULLO"),
(7,  "MASCOTA", "MASCOTA"),
(8,  "LA HUERTA", "LA HUERTA"),
(9,  "TEQUILA", "TEQUILA"),
(10, "COCULA", "COCULA"),
(11, "TAMAZULA", "TAMAZULA DE GORDIANO"),
(12, "TALA", "TALA"),
(13, "LAGOS DE MORENO", "LAGOS DE MORENO"),
(14, "ZAPOTLANEJO", "ZAPOTLANEJO"),
(15, "TEPATITLÁN", "TEPATITLÁN"),
(16, "CUQ/IX", "CUQUIO - IXTLAHUACAN"),
(17, "SAN JUAN", "SAN JUAN DE LOS LAGO"),
(18, "TSJ EN LÍNEA", "TSJ EN LÍNEA"),
(19, "TENAMAXTLÁN", "TENAMAXTLÁN"),
(20, "TOMATLAN", "TOMATLAN");


CREATE TABLE Carreras(
    idCarrera int AUTO_INCREMENT,
    nombreCorto varchar(250),
    nombre varchar(500) NOT NULL,
    PRIMARY KEY(idCarrera)
);

INSERT INTO Carreras(idCarrera, nombreCorto, nombre)
VALUES
(1,  "ING. SIST. COMPUT", "INGENIERÍA EN SISTEMAS COMPUTACIONALES"),
(2,  "ING. INDUSTRIAL", "INGENIERÍA INDUSTRIAL"),
(3,  "ING. ELECTRÓNICA", "INGENIERÍA ELECTRÓNICA"),
(4,  "ING. ELECTROMEC", "INGENIERÍA ELECTROMECÁNICA"),
(5,  "MCYE.MA.E.MSUP", "MCYE. EN MATEMATICA EDUCATIVA PARA EL NIVEL MEDIO SUPERIOR"),
(6,  "MATEMAT. EDUC", "MAESTRÍA EN MATEMÁTICA EDUCATIVA"),
(7,  "ING. GEST. EMP", "INGENIERÍA EN GESTIÓN EMPRESARIAL"),
(8,  "M. SISTEMAS COMP", "MAESTRÍA EN SISTEMAS COMPUTACIONALES"),
(9,  "L. GASTRONOMIA", "LICENCIATURA EN GASTRONOMÍA"),
(10, "ING. CIVIL", "INGENIERÍA CIVIL"),
(11, "ARQUITECTURA", "ARQUITECTURA"),
(12, "ING. ADMON", "INGENIERÍA EN ADMINISTRACIÓN"),
(13, "MAESTRÍA  ADMON", "MAESTRÍA EN ADMINISTRACIÓN"),
(14, "LIC. ADMON", "LICENCIATURA EN ADMINISTRACIÓN"),
(15, "ING. AMBIENTAL", "INGENIERÍA AMBIENTAL"),
(16, "ING. INNOV. AGRÍCOLA", "INGENIERÍA EN INNOVACIÓN AGRÍCOLA SUSTENTABLE"),
(17, "ING. INDUSTRIAS ALIM", "INGENIERÍA EN INDUSTRIAS ALIMENTARIAS"),
(18, "ING. INFORMÁTICA", "INGENIERÍA INFORMÁTICA"),
(19, "ING. TEC INFOR Y COM", "INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIONES"),
(20, "LIC. CONTADOR PUB", "LICENCIATURA EN CONTADOR PÚBLICO"),
(21, "ING. SISTEMAS AUTOM", "INGENIERÍA EN SISTEMAS AUTOMOTRICES"),
(22, "ING. ANIM DIG Y EFEC", "INGENIERÍA EN ANIMACIÓN DIGITAL Y EFECTOS VISUALES"),
(23, "ING. ENERG RENOV", "INGENIERÍA EN ENERGÍAS RENOVABLES"),
(24, "ING. MECATRÓNICA", "INGENIERÍA MECATRÓNICA"),
(25, "LIC. TURISMO", "LICENCIATURA EN TURISMO"),
(26, "LIC. INF", "LICENCIATURA EN INFORMÁTICA");

CREATE TABLE Modalidades(
    idModalidad int AUTO_INCREMENT,
    nombre varchar(500) NOT NULL,
    PRIMARY KEY(idModalidad)
);

INSERT INTO Modalidades(idModalidad, nombre)
VALUES
(1, "ESCOLARIZADA"),
(2, "MIXTA"),
(3, "A DISTANCIA");


CREATE TABLE Planes(
    idPlan int AUTO_INCREMENT,
    idCarrera int NOT NULL,
    idModalidad int NOT NULL,
    idUnidad int NOT NULL,
    tipo varchar(50),
    creditos int,
    materias int,
    creditosMinimos int,
    creditosMaximos int,
    codigoOficial varchar(100),
    estatus boolean,
    PRIMARY KEY(idPlan),
    FOREIGN KEY(idCarrera) REFERENCES Carreras(idCarrera),
    FOREIGN KEY(idModalidad) REFERENCES Modalidades(idModalidad),
    FOREIGN KEY(idUnidad) REFERENCES Unidades(idUnidad)
);

CREATE TABLE Materias(
    idMateria int AUTO_INCREMENT,
    idPlan int NOT NULL,
    codigo varchar(50),
    nombreCorto varchar(100),
    nombre varchar(200),
    creditos int,
    Unidades int,
    horasPracticas int,
    horasTeoricas int,
    requerida boolean,
    evaluada boolean,
    promediada boolean,
    semestre int,
    estatus boolean,
    PRIMARY KEY(idMateria),
    FOREIGN KEY(idPlan) REFERENCES Planes(idPlan)
);

CREATE TABLE Requisitos(
    idRequisito int AUTO_INCREMENT,
    idPre int NOT NULL,
    idPos int NOT NULL,
    PRIMARY KEY(idRequisito),
    FOREIGN KEY(idPre) REFERENCES Materias(idMateria),
    FOREIGN KEY(idPos) REFERENCES Materias(idMateria)
);

CREATE TABLE Especialidades(
    idEspecialidad int AUTO_INCREMENT,
    idUnidad int NOT NULL,
    codigo varchar(100),
    nombreCorto varchar(100),
    nombre varchar(100),
    creditos int,
    estatus boolean,
    PRIMARY KEY(idEspecialidad),
    FOREIGN key(idUnidad) REFERENCES Unidades(idUnidad)
);

CREATE TABLE relacionEspecialidades(
    idRelacion int AUTO_INCREMENT,
    idMateria int NOT NULL,
    idEspecialidad int NOT NULL,
    PRIMARY KEY(idRelacion),
    FOREIGN key(idMateria) REFERENCES Materias(idMateria),
    FOREIGN KEY(idEspecialidad) REFERENCES Especialidades(idEspecialidad)
);

CREATE TABLE Programas(
    idPrograma int AUTO_INCREMENT,
    idCarrera int,
    idModalidad int,
    idUnidad int,
    estatus boolean,
    PRIMARY KEY(idPrograma),
    FOREIGN KEY(idCarrera) REFERENCES Carreras(idCarrera),
    FOREIGN KEY(idModalidad) REFERENCES Modalidades(idModalidad),
    FOREIGN KEY(idUnidad) REFERENCES Unidades(idUnidad)
);

CREATE TABLE Ofertas(
    idOferta int AUTO_INCREMENT,
    nombre varchar(20),
    version varchar(10),
    estatus boolean DEFAULT TRUE,
    PRIMARY KEY(idOferta)
);

CREATE TABLE Turnos(
    idTurno int AUTO_INCREMENT,
    nombre varchar(500),
    PRIMARY KEY(idTurno)
);

INSERT INTO Turnos(idTurno, nombre)
VALUES
(1, "MATUTINO"),
(2, "VESPERTINO"),
(3, "MIXTO"),
(4, "A DISTANCIA");

CREATE TABLE ofertasDetalle(
    idOfertaDetalle int AUTO_INCREMENT,
    idPrograma int,
    idTurno int,
    idOferta int,
    cupoMinimo int,
    cupoMaximo int,
    PRIMARY KEY(idOfertaDetalle),
    FOREIGN KEY(idPrograma) REFERENCES Programas(idPrograma),
    FOREIGN KEY(idTurno) REFERENCES Turnos(idTurno),
    FOREIGN KEY(idOferta) REFERENCES Ofertas(idOferta)
);