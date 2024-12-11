# descripćión api programas de estudio

## http responses:

| codigo | valor   |
|-------|------------|
|201 | Recurso creado |
|202 | Solicitud recibida. En proceso | 
|204 | Solicitud exitosa. Respuesta sin contenido |
|401 | No autorizado |
|403 | Acceso prohibidido |
|404 | Recurso no encontrado |
|405 | Método no permitido |
|500 | Error inertno /servidor|

## http operadores:

| codigo |                            valor                                 |
|--------|------------------------------------------------------------------|
|  ct    | Devuelve las entradas en las que el campo contiene el valor.     |
|  nct   | Devuelve entradas en las que el campo no contiene el valor.      |
|  bw    | Devuelve las entradas en las que el campo comienza con el valor. | 
|  nbw   | Devuelve entradas en las que el campo no comienza con el valor.  |
|  ew    | Devuelve las entradas en las que el campo termina con el valor.  |
|  new   | Devuelve entradas en las que el campo no termina con el valor.   |
|  eq    | Devuelve entradas en las que el campo es igual al valor.         |
|  neq   | Devuelve entradas en las que el campo no es igual al valor.      |
|  gt    | Devuelve entradas en las que el campo es mayor que el valor.     |
|  gte   | Devuelve entradas en las que el campo es mayor o igual al valor. |
|  lt    | Devuelve entradas en las que el campo es inferior al valor.      |
|  lte   | Devuelve entradas en las que el campo es menor o igual al valor. |


## endpoints factoresSanguineos:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|----|------------|-----------------------------|--------|-------------|---------|------------|
| 1  | v1         | factoresSanguineos          | POST   | /v1/factorsanguineo |[objeto] | Registra un factor sanguineo |
| 2  | v1         | factoresSanguineos          | GET    | /v1/factorsanguineo |filtros=[campo]:[operador]:[valor] | devuelve la lista de los factores sanguineos registrados |
| 3  | v1         | factoresSanguineos          | PUT    | /v1/factorsanguineo/{idFactorsanguineo} | [objeto] | actualiza un factor sanguineo |
| 4  | v1         | factoresSanguineos          | DELETE | /v1/factorsanguineo/{idFactorsanguineo} |  | elimina un factor sanguineo |
 

## endpoints generos:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 5  | v1         | generos                     | POST   | /v1/generos | [objeto] | Registra un genero |
| 6  | v1         | generos                     | GET    | /v1/generos |filtros=[campo]:[operador]:[valor] | devuelve la lista de los generos registrados |
| 7  | v1         | generos                     | PUT    | /v1/generos/{idGenero} | [objeto] | actualiza un genero |
| 8  | v1         | generos                     | DELETE | /v1/generos/{idGenero} |  | elimina un genero |


## endpoints examen:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 9  | v1         | examen                      | POST   | /v1/examen | [objeto] | Registra un examen |
| 10 | v1         | examen                      | GET    | /v1/examen |filtros=[campo]:[operador]:[valor] | devuelve la lista de los examenes registrados |
| 11 | v1         | examen                      | PUT    | /v1/examen/{idExamen} | [objeto] | actualiza un examen |
| 12 | v1         | examen                      | DELETE | /v1/examen/{idExamen} |  | elimina un examen |


## endpoints convocatorias:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 13 | v1         | convocatorias               | POST   | /v1/convocatoria | [objeto] | Registra una convocatoria, no pueden haber dos convocatorias con las fechas cruzadas, es decir no se puede registrar una convocatoria con fecha de inicio siendo menor a la fecha de fin de la convocatoria vigente o no vigente anterior  |
| 14 | v1         | convocatorias               | GET    | /v1/convocatoria |filtros=[campo]:[operador]:[valor] | devuelve la lista de las convocatorias registradas |
| 15 | v1         | convocatorias               | GET    | /v1/convocatoria/{idConvocatoria} | | devuelve una convocatoria en especifico |
| 16 | v1         | convocatorias               | PUT    | /v1/convocatoria/{idConvocatoria} | [objeto] | actualiza una convocatoria |
| 17 | v1         | convocatorias               | DELETE | /v1/convocatoria/{idConvocatoria} |  | no elimina la convocatoria cambia el estatus a cancelado |


## endpoints aspirantes:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 18 | v1         | aspirantes                  | POST   | /v1/aspirante | [objeto] | registra un aspirante  |
| 19 | v1         | aspirantes                  | GET    | /v1/aspirante |filtros=[campo]:[operador]:[valor] | devuelve la lista de los aspirantes registrados |
| 20 | v1         | aspirantes                  | GET    | /v1/aspirante/{idAspirante} | | devuelve un aspirante en especifico |
| 21 | v1         | aspirantes                  | PUT    | /v1/aspirante/{idAspirante} | [objeto] | actualiza un aspirante |


## endpoints etapas:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 22 | v1         | etapas                      | POST   | /v1/etapa   | [objeto] | registra una etapa |
| 23 | v1         | etapas                      | GET    | /v1/etapa   |filtros=[campo]:[operador]:[valor] | devuelve la lista de las etapas registradas |
| 24 | v1         | etapas                      | PUT    | /v1/etapa/{idEtapa} | [objeto] | actualiza una etapa |
| 25 | v1         | etapas                      | DELETE | /v1/etapa/{idEtapa} |  |  elimina una etapa  |


## endpoints historialEtapas:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 25 | v1         | historialEtapas             | POST   | /v1/historialetapa   | [objeto] | crea un registro en la tabla historialEtapas que relaciona a un aspirante con una etapa |
| 26 | v1         | historialEtapas             | GET    | /v1/historialetapa/{idAspirante} | | devuelve el historial de etapas de un aspirante |


## endpoints tipoSeguros:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 27 | v1         | tipoSeguros                 | POST   | /v1/tiposeguro | [objeto] | Registra un seguro |
| 28 | v1         | tipoSeguros                 | GET    | /v1/tiposeguro |filtros=[campo]:[operador]:[valor] | devuelve la lista de los seguros registrados |
| 29 | v1         | tipoSeguros                 | PUT    | /v1/tiposeguro/{idTipoSeguro} | [objeto] | actualiza un seguro |
| 30 | v1         | tipoSeguros                 | DELETE | /v1/tiposeguro/{idTipoSeguro} |  | elimina un seguro |


## endpoints medico:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 31 | v1         | medico                      | POST   | /v1/medico  | [objeto] | Registra los datos medicos de un usuario |
| 32 | v1         | medico                      | GET    | /v1/medico  |filtros=[campo]:[operador]:[valor] | devuelve la lista de los datos medicos |
| 33 | v1         | medico                      | PUT    | /v1/medico/{idMedico} | [objeto] | actualiza un registro de datos medicos |


## endpoints tiposEscuela:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 34 | v1         | tipoEscuelas                | POST   | /v1/tipoescuela | [objeto] | Registra un tipo de escuela |
| 35 | v1         | tipoEscuelas                | GET    | /v1/tipoescuela |filtros=[campo]:[operador]:[valor] | devuelve la lista de los tipos de escuela registrados |
| 36 | v1         | tipoEscuelas                | PUT    | /v1/tipoescuela/{idTipoEscuela} | [objeto] | actualiza un tipo de escuela |
| 37 | v1         | tipoEscuelas                | DELETE | /v1/tipoescuela/{idTipoEscuela} |  | elimina un tipo de escuela |


## endpoints gradoEstudios:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 38 | v1         | gradoEstudios               | POST   | /v1/gradoestudio | [objeto] | Registra un grado de estudio |
| 39 | v1         | gradoEstudios               | GET    | /v1/gradoestudio |filtros=[campo]:[operador]:[valor] | devuelve la lista de los grados de estudio registrados |
| 40 | v1         | gradoEstudios               | PUT    | /v1/gradoestudio/{idGradoEstudio} | [objeto] | actualiza un grado de estudio |
| 41 | v1         | gradoEstudios               | DELETE | /v1/gradoestudio/{idGradoEstudio} |  | elimina un grado de estudio |


## endpoints estudios:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 42 | v1         | estudios                    | POST   | /v1/estudio  | [objeto] | Registra los datos de estudio de un aspirante |
| 43 | v1         | estudios                    | GET    | /v1/estudio/{idAspirante}  | | devuelve los datos de estudio de un aspirante en especifico |
| 44 | v1         | estudios                    | PUT    | /v1/estudio/{idEstudio} | [objeto] | actualiza un registro de datos de estudio |


## endpoints encuestaCaptacion:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 45 | v1         | encuestaCaptacion           | POST   | /v1/encuestacaptacion  | [objeto] | Registra la encuesta de captacion que contesto el alumno |
| 46 | v1         | encuestaCaptacion           | GET    | /v1/encuestacaptacion/{idAspirante}  | | devuelve las respuestas de la encuesta de captacion de un aspirante en especifico |
| 47 | v1         | encuestaCaptacion           | PUT    | /v1/encuestacaptacion/{idEncuestaCaptacion} | [objeto] | actualiza un registro de la encuesta |


## endpoints encuestaCapacidades:

| id | Versión    | colección/Documento/Store   | método | Controlador |  Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|----------|-------------|
| 48 | v1         | encuestaCapacidades         | POST   | /v1/encuestacapacidades  | [objeto] | Registra la encuesta de capacidades que contesto el alumno |
| 49 | v1         | encuestaCapacidades         | GET    | /v1/encuestacapacidades/{idAspirante}  | | devuelve las respuestas de la encuesta de capacidades de un aspirante en especifico |
| 50 | v1         | encuestaCapacidades         | PUT    | /v1/encuestacapacidades/{idEncuestaCaptacion} | [objeto] | actualiza un registro de la encuesta |