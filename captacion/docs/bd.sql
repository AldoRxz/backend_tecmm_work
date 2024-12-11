CREATE TABLE factoresSanguineos(
    idFactorSanguineo int AUTO_INCREMENT,
    factor varchar(5),
    PRIMARY KEY(idFactorSanguineo)
);

CREATE TABLE generos(
    idGenero int AUTO_INCREMENT,
    genero varchar(50),
    PRIMARY KEY(idGenero)
);

CREATE TABLE examen(
    idExamen int AUTO_INCREMENT,
    nombre varchar(100),
    PRIMARY KEY(idExamen)
);


CREATE TABLE convocatorias(
    idConvocatoria int AUTO_INCREMENT,
    idExamen int,
    idOferta int,
    idPeriodo int,
    fechaInicio datetime,
    fechaFIn datetime,
    fechaPagoExamen datetime,
    fechaPagoInscripcion datetime,
    fechaExamen datetime,
    estatus enum("vigente", "no vigente", "cancelado"),
    PRIMARY KEY(idConvocatoria),
    FOREIGN KEY(idExamen) REFERENCES examen(idExamen)
);

CREATE TABLE aspirantes(
    idAspirante varchar(50),
    idFactorSanguineo int,
    idGenero int,
    idConvocatoria int,
    nombre varchar(500),
    primerAPellido varchar(500),
    segundoApellido varchar(500),
    telefonoCelular varchar(15),
    correo varchar(500),
    curp varchar(20),
    paisNacimiento varchar(200),
    estadoNacimiento varchar(200),
    municipioNacimiento varchar(400),
    fechaNacimiento date,
    PRIMARY KEY(idAspirante),
    FOREIGN KEY(idFactorSanguineo) REFERENCES factoresSanguineos(idFactorSanguineo),
    FOREIGN KEY(idGenero) REFERENCES generos(idGenero),
    FOREIGN KEY(idConvocatoria) REFERENCES convocatorias(idConvocatoria)
);


CREATE TABLE etapas(
    idEtapa int AUTO_INCREMENT,
    nombre varchar(100),
    PRIMARY KEY(idEtapa)
);


CREATE TABLE historialEtapas(
    idHistorial int AUTO_INCREMENT,
    idAspirante varchar(50),
    idEtapa int,
    fecha datetime,
    PRIMARY KEY(idHistorial),
    FOREIGN KEY(idAspirante) REFERENCES aspirantes(idAspirante),
    FOREIGN KEY(idEtapa) REFERENCES etapas(idEtapa)
);


CREATE TABLE tipoSeguros(
    idTipoSeguros int AUTO_INCREMENT,
    seguro varchar(100),
    PRIMARY KEY(idTipoSeguros)
);


CREATE TABLE medico(
    idMedico int AUTO_INCREMENT,
    idAspirante varchar(50),
    idTipoSeguros int,
    numeroSeguro varchar(30),
    numeroClinica varchar(20),
    contactoEmergencia varchar(20),
    tutor varchar(500),
    telefonoTutor varchar(20),
    paisTutor varchar(200),
    estadoTutor varchar(200),
    municipioTutor varchar(400),
    coloniaTutor varchar(400),
    direccionTutor varchar(500),
    PRIMARY KEY(idMedico),
    FOREIGN KEY(idAspirante) REFERENCES aspirantes(idAspirante),
    FOREIGN KEY(idTipoSeguros) REFERENCES tipoSeguros(idTipoSeguros)
);

CREATE TABLE tiposEscuelas(
    idTipoEscuela int AUTO_INCREMENT,
    tipo varchar(100),
    PRIMARY KEY(idTipoEscuela)
);


CREATE TABLE gradoEstudios(
    idGradoEstudio int AUTO_INCREMENT,
    grado varchar(100),
    PRIMARY KEY(idGradoEstudio)
);


CREATE TABLE estudios(
    idEstudios int AUTO_INCREMENT,
    idAspirante varchar(50),
    idGradoEstudio int,
    idTipoEscuela int,
    nombreEscuela varchar(300),
    estado varchar(200),
    documentoObtenido varchar(50),
    promedioObtenido varchar(6),
    carrera varchar(100),
    cedula varchar(100),
    fechaInicio date,
    fechaTermino date,
    PRIMARY KEY(idEstudios),
    FOREIGN KEY(idAspirante) REFERENCES aspirantes(idAspirante),
    FOREIGN KEY(idGradoEstudio) REFERENCES gradoEstudios(idGradoEstudio),
    FOREIGN KEY(idTipoEscuela) REFERENCES tiposEscuelas(idTipoEscuela)
);


CREATE TABLE encuestaCaptacion(
    idEncuestaCaptacion int AUTO_INCREMENT,
    idAspirante varchar(50),
    medioConocimiento varchar(300),
    factor varchar(200),
    medioComunicacion varchar(100),
    carreraPreferencia varchar(100),
    universidadEleccion varchar(100),
    experiencia varchar(400),
    sugerencia varchar(400),
    PRIMARY KEY(idEncuestaCaptacion),
    FOREIGN KEY(idAspirante) REFERENCES aspirantes(idAspirante)
);


CREATE TABLE encuestaCapacidades(
    idEncuestaCaptacion int AUTO_INCREMENT,
    idAspirante varchar(50),
    discapacidad varchar(100),
    anteojos boolean,
    auditivo boolean,
    extremidad varchar(100),
    sillaRuedas boolean,
    protesisOrtopedica boolean,
    lenguaje boolean,
    lectura boolean,
    escritura boolean,
    etnia varchar(100),
    religion varchar(100),
    ingresos varchar(6),
    PRIMARY KEY(idEncuestaCaptacion),
    FOREIGN KEY(idAspirante) REFERENCES aspirantes(idAspirante)
);