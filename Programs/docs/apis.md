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

| codigo | valor   |
|-------|------------|
|ct         | Devuelve las entradas en las que el campo contiene el valor.|
|nct        | Devuelve entradas en las que el campo no contiene el valor.|
|bw         | Devuelve las entradas en las que el campo comienza con el valor.| 
|nbw        | Devuelve entradas en las que el campo no comienza con el valor.|
|ew         | Devuelve las entradas en las que el campo termina con el valor.|
|new        | Devuelve entradas en las que el campo no termina con el valor.|
|eq         | Devuelve entradas en las que el campo es igual al valor.|
|neq        | Devuelve entradas en las que el campo no es igual al valor.|
|gt         | Devuelve entradas en las que el campo es mayor que el valor.|
|gte        | Devuelve entradas en las que el campo es mayor o igual al valor.|
|lt         | Devuelve entradas en las que el campo es inferior al valor.|
|lte        | Devuelve entradas en las que el campo es menor o igual al valor.|


## endpoints unidades:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|----|------------|-----------------------------|--------|-------------|---------|------------|
| 1 | v1         | unidades                   | POST   | /v1/unidad |[objeto] | Registra una unidad|
| 2 | v1         | unidades                   | GET   | /v1/unidad |filtros=[campo]:[operador]:[valor] | devuelve la lista de las unidades registradas|
| 3 | v1         | unidades                   | GET   | /v1/unidad/{idUnidad} |  | devuelve una unidad en especifico|
| 4 | v1         | unidades                   | PATCH   | /v1/unidad/{idUnidad} |valor=[campo]:[valor] | actualiza una unidad|

## endpoints Carreras:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|----|------------|-----------------------------|--------|-------------|---------|------------|
| 5 | v1         | carreras                   | POST   | /v1/carrera | [objeto] | registra una carrera|
| 6 | v1         | carreras                   | GET   | /v1/carrera | filtros=[campo]:[operador]:[valor] | obtiene la lista de las carreras |
| 7 | v1         | carreras                   | GET   | /v1/carrera/{idCarrera} |  | devuelve una carrera en especifico|
| 8 | v1         | carreras                   | PATCH   | /v1/unidad/{idCarrera} |valor=[campo]:[valor] | actualiza una carrera|

## endpoints Modalidades:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|----|------------|-----------------------------|--------|-------------|---------|------------|
| 9 | v1         | modalidades                   | POST   | /v1/modalidad | [objeto] | registra una modalidad|
| 10 | v1         | modalidades                   | GET   | /v1/modalidad | filtros=[campo]:[operador]:[valor] | obtiene la lista de las modalidades |
| 11 | v1         | modalidades                   | GET   | /v1/modalidad/{idModalidad} |  | devuelve una modalidad en especifico|
| 12 | v1         | modalidades                   | PATCH   | /v1/modalidad/{idModalidad} |valor=[campo]:[valor] | actualiza una modalidad|

## endpoints Planes:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|---------|-------------|
| 13 | v1         | planes                   | POST   | /v1/plan | [objeto] | registra un plan|
| 14 | v1         | planes                   | GET   | /v1/plan | filtros=[campo]:[operador]:[valor] | obtiene la lista de los planes |
| 15 | v1         | planes                   | GET   | /v1/plan/{idPlan} |  | devuelve un plan en especifico|
| 16 | v1         | planes                   | PATCH   | /v1/plan/{idPlan} |valor=[campo]:[valor] | actualiza un plan|
| 17 | v1         | planes                   | DELETE   | /v1/plan/{idPlan} | | elimina un plan |

## endpoints Materias:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|---------|-------------|
| 18 | v1         | materias                   | POST   | /v1/materia | [objeto] | registra una materia|
| 19 | v1         | materias                   | GET   | /v1/materia | filtros=[campo]:[operador]:[valor] | obtiene la lista de las materias |
| 20 | v1         | materias                   | GET   | /v1/materia/{idMateria} |  | devuelve una materia en especifico|
| 21 | v1         | materias                   | PATCH   | /v1/materia/{idMateria} |valor=[campo]:[valor] | actualiza una materia|
| 22 | v1         | materias                   | DELETE   | /v1/materia/{idMateria} | | elimina una materia |

## endpoints Requisitos:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|---------|-------------|
| 23 | v1         | requisitos                   | POST   | /v1/requisitos | [objeto] | registra un requisito|
| 24 | v1         | requisitos                   | GET   | /v1/requisitos/{idPre} |  | obtiene la lista de las materias que son requisito de una materia en especifico |
| 25 | v1         | requisitos                   | GET   | /v1/requisitos/{idPre}/{idPos} |  | obtiene si una materia es requisito de otra |
| 26 | v1         | requisitos                   | DELETE   | /v1/requisitos/{idRequisito} | | elimina un requisito |

## endpoints Especialidades:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|----|------------|-----------------------------|--------|-------------|---------|------------|
| 27 | v1         | especialidades                   | POST   | /v1/especialidad | [objeto] | registra una especialidad|
| 28 | v1         | especialidades                   | GET   | /v1/especialidad | filtros=[campo]:[operador]:[valor] | obtiene la lista de las especialidades |
| 29 | v1         | especialidades                   | GET   | /v1/especialidad/{idEspecialidad} |  | devuelve una especialidad en especifico|
| 30 | v1         | especialidades                   | PATCH   | /v1/especialidad/{idEspecialidad} |valor=[campo]:[valor] | actualiza una especialidad|

## endpoints relacionEspecialidad:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|---------|-------------|
| 31 | v1         | relacionEspecialidades               | POST   | /v1/relacion | [objeto] | registra la relacion de una materia con una especialidad |
| 32 | v1         | relacionEspecialidades               | GET   | /v1/relacion/{idEspecialidad} |  | obtiene la lista de las materias que pertenecen a una especialidad en especifico |
| 33 | v1         | relacionEspecialidades               | GET   | /v1/relacion/{idMateria}/{idEspecialidad} |  | obtiene si una materia pertenece a una especialidad |
| 34 | v1         | relacionEspecialidades               | DELETE   | /v1/relacion/{idMateria}/{idEspecialidad} | | elimina una relacion |

## endpoints Programas:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|---------|-------------|
| 35 | v1         | Programas                   | POST   | /v1/programa | [objeto] | registra un programa |
| 36 | v1         | Programas                   | GET   | /v1/programa | filtros=[campo]:[operador]:[valor] | obtiene la lista de los programas |
| 37 | v1         | Programas                   | GET   | /v1/programa/{idPrograma} |  | devuelve un programa en especifico|
| 38 | v1         | Programas                   | PATCH   | /v1/programa/{idPrograma} |valor=[campo]:[valor] | actualiza un programa|
| 39 | v1         | Programas                   | DELETE   | /v1/programa/{idPrograma} | | elimina un programa |

## endpoints Ofertas:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción |
|----|------------|-----------------------------|--------|-------------|---------|-------------|
| 40 | v1         | ofertas                   | POST   | /v1/oferta | [objeto] | registra una oferta |
| 41 | v1         | ofertas                   | GET   | /v1/oferta | filtros=[campo]:[operador]:[valor] | obtiene la lista de las ofertas |
| 42 | v1         | ofertas                   | GET   | /v1/oferta/{idOferta} |  | devuelve una oferta en especifico|
| 43 | v1         | ofertas                   | PATCH   | /v1/oferta/{idOferta} |valor=[campo]:[valor] | actualiza una oferta|
| 44 | v1         | ofertas                   | DELETE   | /v1/oferta/{idOferta} | | elimina una oferta |


## endpoints Turnos:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|----|------------|-----------------------------|--------|-------------|---------|------------|
| 45 | v1         | turnos                   | POST   | /v1/turno | [objeto] | registra un turno |
| 46 | v1         | turnos                   | GET   | /v1/turno | filtros=[campo]:[operador]:[valor] | obtiene la lista de los turnos |
| 47 | v1         | turnos                   | GET   | /v1/turno/{idTurno} |  | devuelve un turno en especifico|
| 48 | v1         | turnos                   | PATCH   | /v1/turno/{idTurno} |valor=[campo]:[valor] | actualiza un turno|

## endpoints ofertasDetalle:


| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|----|------------|-----------------------------|--------|-------------|---------|------------|
| 49 | v1         | ofertasDetalle                   | POST   | /v1/detalle | [objeto] | registra detalles de la oferta |
| 50 | v1         | ofertasDetalle                   | GET   | /v1/detalle | filtros=[campo]:[operador]:[valor] | obtiene la lista de los detalles |
| 51 | v1         | ofertasDetalle                   | GET   | /v1/detalle/{idDetalle} |  | devuelve un detalle en especifico|
| 52 | v1         | ofertasDetalle                   | PATCH   | /v1/detalle/{idDetalle} |valor=[campo]:[valor] | actualiza un detalle|