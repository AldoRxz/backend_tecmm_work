# diccionario de datos microservicio Captacion

## tabla: factoresSanguineos

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idFactorSanguineo** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **factor** | 5 | varchar | factor sanguineo, ejemplo: (A+, O+, B-) |


## tabla: generos

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idGenero** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **Genero** | 50 | varchar | Generos que el aspirante seleccionará, ejemplo (Hombre, mujer) |


## tabla: examen

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idExamen** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **nombre** | 100 | varchar | nombre del examen a realizarse, ejemplo (collageboard, ceneval) |


## tabla: convocatorias

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idConvocatoria** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **idExamen** | predeterminado | int | id del examen que se relacionará a la convocatoria |
| **idOferta** | predeterminado | int | id de la oferta que se relacionará a la convocatoria. Este id tiene que coincidir con el idOferta de la tabla ofertas del microservicio de ofertas, por el momento puede ser cualquier entero, esta validación la haremos despues |
| **idPeriodo** | predeterminado | int | id del periodo de inscripción de la convocatoria, al igual que idOferta puede ser cualquier entero ya que la validación la haremos más tarde |
| **fechaInicio** | predeterminado | dateTime | fecha en la que inicia la convocatoria |
| **fechaFin** | predeterminado | dateTime | fecha en la que termina la convocatoria |
| **fechaPagoExamen** | predeterminado | dateTime | fecha limite en la que el aspirante podrá pagar su derecho a examen |
| **fechaPagoInscripcion** | predeterminado | dateTime | fecha limite en la que el aspirante podrá pagar su inscripcion |
| **fechaExamen** | predeterminado | dateTime | fecha en la que el aspirante tendrá que realizar su examen de admision |
| **estatus** | predeterminado | enum | los valores admitidos de esta campo son (Vigente, no vigente, cancelado) |


## tabla: aspirantes

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idAspirante** | 50   | varchar   | es el id del campo además de fungir como llave primaria de la tabla, se utilizará un uuid v4 que es el mismo que se regitra en el microservicio sso, por el momento dejar cualquier cadena |
| **idFactorSanguineo** | predeterminado | int | id del factor sanguineo que se relacionará al aspirante |
| **idGenero** | predeterminado | int | id del genero que se relacionará al aspirante |
| **idConvocatoria** | predeterminado | int | id de la convocatoria que se relacionará al aspirante |
| **nombre** | 500 | varchar | nombre o nombres del aspirante |
| **primerApellido** | 500 | varchar | apellido paterno del aspirante |
| **segundoApellido** | 500 | varchar | apellido materno del aspirante |
| **telefonoCelular** | 15 | varchar | numero de celular del aspirante |
| **correo** | 500 | varchar | correo del aspirante |
| **curp** | 20 | varchar | curp del aspirante |
| **paisNacimiento** | 200 | varchar | pais de nacimiento del aspirante |
| **estadoNacimiento** | 200 | varchar | estado de nacimiento del aspirante, en caso que haya nacido en México |
| **municipioNacimiento** | 400 | varchar | municipio de nacimiento del aspirante, en caso que haya nacido en México |
| **fechaNacimiento** | predeterminado | date | fecha de nacimiento del aspirante |


## tabla: etapas

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idEtapa** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **nombre** | 100 | varchar | nombre de la etapa en la que se pueden encontrar los aspirantes, ejemplos:  REGISTRADO SIN VALIDAR, REGISTRADO VALIDADO, EXAMEN PAGADO, PRESENTO EXAMEN, INSCRIPCION PAGADA, INTEGRACION DE EXPEDIENTE, EXPEDIENTE VALIDADO, INSCRITO |


## tabla: historialEtapas

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idHistorial** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **idAspirante** | 50 | varchar | id del aspirante que se relaciona a la etapa y al historial |
| **idEtapa** | predeterminado | int | id de la etapa que se relaciona al aspirante y al historial |
| **fecha** | predeterminado | datetime | fecha en la que se realiza el cambio de etapa |


## tabla: tipoSeguros

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idTipoSeguros** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **seguro** | 100 | varchar | tipo de seguro al que el aspirante puede estar afiliado, ejemplo (IMSS, INSABI, PRIVADO) |


## tabla: medico

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idMedico** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **idAspirante** | 50 | varchar | id del aspirante que se relaciona a los datos medicos |
| **idTipoSeguro** | predeterminado | int | id del tipo de seguro que se relaciona a los datos medicos |
| **numeroSeguro** | 30 | varchar | numero de seguro del aspirante |
| **numeroClinica** | 20 | varchar | numero de la clinica del aspirante |
| **contactoEmergencia** | 20 | varchar | numero de telefono del contacto de emergencia del aspirante |
| **tutor** | 500 | varchar | nombre completo del tutor del aspirante |
| **telefonoTutor** | 20 | varchar | numero de telefono del tutor del aspirante |
| **paisTutor** | 200 | varchar | pais de nacimiento del tutor |
| **estadoTutor** | 200 | varchar | estado de nacimiento del tutor, en caso que haya nacido en México |
| **municipioTutor** | 400 | varchar | municipio de nacimiento del tutor, en caso que haya nacido en México |
| **coloniaTutor** | 400 | varchar | colonia de residencia del tutor |
| **direccionTutor** | 500 | varchar | direccion de residencia del tutor |


## tabla: tiposEscuela

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idTipoEscuela** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **tipo** | 100 | varchar | tipo de la escuela de procedencia ejemplo: (Tecnico, tecnologo, normal) |


## tabla: gradoEstudios

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idGradoEstudio** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **grado** | 100 | varchar | ultimo grado de estudio del aspirante, ejemplos, (bachillerato, licenciatura, maestria) |


## tabla: estudios

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idEstudios** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **idAspirante** | 50 | varchar | id del aspirante que se relaciona a los datos de estudio |
| **idGradoEstudio** | predeterminado | int | ultimo grado de estudios del aspirante |
| **idTipoEscuela** | predeterminado | int | tipo de la escuela de procedencia del aspirante |
| **nombreEscuela** | 300 | varchar | nombre de la escuela de procedencia del aspirante |
| **estado** | 200 | varchar | estado de la escuela de procedencia del aspirante |
| **documentoObtenido** | 50 | varchar | el documento que se obtuvo con el ultimo grado de estudios, ejemplos: (Certificado de bachillerato, titulo licenciatura, titulo maestria) |
| **promedioObtenido** | 6 | varchar | el promedio que obtuvo el aspirante en su último nivel de estudio |
| **carrera** | 100 | varchar | en caso de estudiar un bachillerato tecnico o algun grado con carrera |
| **cedula** | 100 | varchar | en caso de haber obtenido una cedula |
| **fechaInicio** | predeteminado | date | fecha de inicio del último grado de estudios |
| **fechaTermino** | predeteminado | date | fecha de termino del último grado de estudios |



## tabla: encuestaCaptacion

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idEncuestaCaptación** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **idAspirante** | 50 | varchar | id del aspirante que se relaciona a la encuesta |
| **medioConocimiento** | 300 | varchar | aqui se alamacenará la información de la pregunta ¿Por que medio conociste al TSJ? |
| **factor** | 200 | varchar | aqui se alamacenará la información de la pregunta ¿cual fue el factor por el que decidiste inscribirte al TSJ? |
| **medioComunicacion** | 100 | varchar | aqui se alamacenará la información de la pregunta ¿por que medio de comunicación te gustaría que te hagamos llegar informacion? |
| **carreraPreferencia** | 100 | varchar | aqui se alamacenará la información de la pregunta ¿cual es la carrera de preferencia en caso de no haber elegido la carrera que elegiste? |
| **universidadEleccion** | 100 | varchar | aqui se alamacenará la información de la pregunta ¿cual universidad hubieras preferido en caso de no inscribirte al TSJ? |
| **experiencia** | 400 | varchar | aqui se alamacenará la información de la pregunta ¿cual ha sido tu experiencia al inscribirte? |
| **sugerencia** | 400 | varchar | aqui se alamacenará la información de la pregunta ¿tienes alguna sugerencia para el proceso de admision? |


## tabla: encuestaCapacidades

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idEncuestaCaptación** | predeterminado   | int   | es el id del campo además de fungir como llave primaria de la tabla |
| **idAspirante** | 50 | varchar | id del aspirante que se relaciona a la encuesta |
| **discapacidad** | 100 | varchar | registra si tiene alguna discapacidad |
| **anteojos** | predeterminado | boolean | registra si el aspirante utiliza anteojos |
| **auditivo** | predeterminado | boolean | registra si el aspirante tiene discapacidad auditiva |
| **extremidad** | 100 | varchar | registra si el aspirante tiene discapacidad en alguna extremidad |
| **sillaRudedas** | predeterminado | boolean | registra si el aspirante utiliza silla de ruedas |
| **protesisOrtopedica** | predeterminado | boolean | registra si el aspirante utiliza protesis ortopedica |
| **lenguaje** | predeterminado | boolean | registra si el aspirante tiene discapacidad de lenguaje |
| **lectura** | predeterminado | boolean | registra si el aspirante tiene discapacidad de lectura |
| **escritura** | predeterminado | boolean | registra si el aspirante tiene discapacidad de escritura |
| **etnia** | 100 | varchar | registra si el pertenece a una etnia |
| **religion** | 100 | varchar | registra si el pertenece a una religion |
| **ingresos** | 6 | varchar | registra los ingresos del aspirante |
