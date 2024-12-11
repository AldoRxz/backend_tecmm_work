# diccionario de datos microservicio programas de estudio

## tabla: Unidades

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idUnidad**    | predeterminado   | integer   | es el id de la unidad además de fungir como llave primaria de la tabla |
| **nombreCorto** | 250 | varchar | nombre corto de la unidad, ejemplo: PTO VALLARTA |
| **nombre** | 500 | varchar | nombre completo y sin abreviaciones de la unidad, ejemplo: PUERTO VALLARTA |


## tabla: Carreras 
| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idCarrera** | predeterminado | integer | es el id de la carrera además de fungir como llave primaria de la tabla |
| **nombreCorto** | 250 | varchar | nombre corto de la carrera, ejemplo: ING ADM |
| **nombre** | 500 | varchar | nombre completo y sin abreviaciones de la carrera, ejemplo: INGENIERIA EN ADMINISTRACION |


## tabla: Modalidades

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idMOdalidad** | predeterminado | integer | es el id de la modalidad además de fungir como llave primaria de la tabla |
| **nombre** | 500 | varchar | nombre completo y sin abreviaciones de la Modalidad, ejemplo: ESCOLARIZADA |


## tabla: Planes
| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idPlan** | predeterminado | integer | es el id del plan además de fungir como llave primaria de la tabla |
| **idCarrera** | predeterminado | integer | es el id de la carrera relacionada con el plan |
| **idModalidad** | predeterminado | integer | es el id de la modalidad relacionada con el plan |
| **idUnidad** | predeterminado | integer | es el id de la unidad relacionada con el plan |
| **tipo** | 50 | varchar | tipo en el que se divide el plan, ejemplo: semestre, trimestre etc. |
| **creditos** | predeterminado | integer | suma de los creditos de las materias que pertenecen al plan de estudios |
| **materias** | predeterminado | integer | suma de las materias que pertenecen al plan de estudios |
| **creditosMinimos** | predeterminado | integer | creditos minimos que los alumnos pueden tener por semestre |
| **creditosMaximos** | predeterminado | integer | creditos maximos que los alumnos pueden tener por semestre |
| **codigoOficial** | 100 | varchar | identificador oficial del plan de estudios |
| **estatus** | 1 | boolean | indicador booleano que señala si el registro está activo, si es 1 se debe de tomar en cuenta para cualquier operación si es 0 se debe de ignorar | 

## tabla: Materias
| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idMateria** | predeterminado | integer | es el id de la materia además de fungir como llave primaria de la tabla |
| **idPlan** | predeterminado | integer | es el id del plan relacionado con la materia |
| **codigo** | 50 | varchar | identificador o clave de la materia |
| **nombreCorto** | 100 | varchar | nombre con abreviaciones de la materia |
| **nombre** | 200 | varchar | nombre sin abreviaciones de la materia |
| **creditos** | predeterminado | integer | valor individual de los creditos en curricula |
| **unidades** | predeterminado | integer | numero de unidades en las que se divide la materia |
| **horasPracticas** | predeterminado | integer | numero de horas practicas a la semana de la materia |
| **horasTeoricas** | predeterminado | integer | numero de horas teoricas a la semana de la materia |
| **requerida** | 1 | boolean | indicador que señala si la materia es requerida para que los alumnos egresen |
| **evaluda** | 1 | boolean | indicador que señala si la materia necesita ser evaluada |
| **promediada** | 1 | boolean | indicador que señala si la materia necesita ser promediada |
| **semestre** | predeterminada | integer | numero del semestre a la que pertenece el semestre |
| **estatus** | 1 | boolean | indicador booleano que señala si el registro está activo, si es 1 se debe de tomar en cuenta para cualquier operación si es 0 se debe de ignorar | 


## tabla: Requisitos
| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idRequisito** | predeterminado | integer | es el id del requisito además de fungir como llave primaria de la tabla |
| **idPre** | predeterminado | integer | es el id de la materia predecesora que es requisito |
| **idPos** | predeterminado | integer | es el id de la materia que no se puede cursar si no se acredita la materia en id pre |

## tabla: Especialidades
| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idEspecialidad** | predeterminado | integer | es el id de la especialidad además de fungir como llave primaria de la tabla |
| **idUnidad** | predeterminado | integer | es el id de la unidad en la que se oferta la especialidad |
| **codigo** | 100 | varchar | es el codigo con el que se le reconoce la especialidad |
| **nombreCorto** | 100 | varchar | nombre con abreviaturas de la especialidad |
| **nombre** | 100 | varchar | nombre sin abreviaturas de la especialidad |
| **creditos** | predeterminado | integer | suma de los creditos de las materias que pertenecen a la especialidad
|
| **estatus** | 1 | boolean | indicador booleano que señala si el registro está activo, si es 1 se debe de tomar en cuenta para cualquier operación si es 0 se debe de ignorar | 


## tabla: relacionEspecialidades
| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idRelacion** | predeterminado | integer | es el id de la relacion además de fungir como llave primaria de la tabla |
| **idMateria** | predeterminado | integer | es el id de la materia relacionada a la especialidad |
| **idEspecialidad** | predeterminado | integer | es el id de la especialidad relacionada a la materia |

## tabla: Programas
| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idPrograma** | predeterminado | integer | es el id del programa además de fungir como llave primaria de la tabla |
| **idCarrera** | predeterminado | integer | es el id de la carrera relacionada al programa |
| **idModalidad** | predeterminado | integer | es el id de la modalidad relacionada al programa |
| **idUnidad** | predeterminado | integer | es el id de la unidad relacionada al programa |
| **estatus** | 1 | boolean | indicador booleano que señala si el registro está activo, si es 1 se debe de tomar en cuenta para cualquier operación si es 0 se debe de ignorar | 

## tabla: ofertas

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idOferta** | predeterminado | integer | es el id de la convocatoria además de fungir como llave primaria de la tabla |
| **nombre** | 20 | varchar | nombre completo y sin abreviaciones de la oferta, ejemplo: 2024A |
| **version** | 10 | varchar | versión de la oferta |
| **estatus** | 1 | boolean | indicador booleano que señala si el registro está activo, si es 1 se debe de tomar en cuenta para cualquier operación si es 0 se debe de ignorar | 

## tabla: Turnos

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idTurno** | predeterminado | integer | es el id del turno además de fungir como llave primaria de la tabla |
| **nombre** | 500 | varchar | nombre completo y sin abreviaciones del turno, ejemplo: VESPERTINO |

## tabla: ofertasDetalle

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idOfertaDetalle** | predeterminado | integer | es el id de los detalles de la oferta además de fungir como llave primaria de la tabla |
| **idPrograma** | predeterminado | integer | es el id del programa relacionado al detalle |
| **idTurno** | predeterminado | integer | es el id del turno relacionado al detalle |
| **idoferta** | predeterminado | integer | es el id de la oferta relacionada al detalle |
| **cupo minimo** | predeterminado | integer | es el cupo minimo requerido para que se aperture la oferta |
| **cupo maximo** | predeterminado | integer | es el cupo maximo con el que cuenta la oferta |

