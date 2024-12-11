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

## endpoints Servicios:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|----|------------|-----------------------------|--------|-------------|---------|------------|
| 1 | v1         | servicios                   | POST   | /v1/servicio |[objeto] | Registra un servicio |
| 2 | v1         | servicios                   | GET   | /v1/servicio  |filtros=[campo]:[operador]:[valor] | devuelve la lista de los servicios con estado activo registrados |
| 3 | v1         | servicios                   | GET   | /v1/servicio/{idServicio} |  | devuelve un servicio en especifico|
| 4 | v1         | servicios                   | PUT   | /v1/servicio/{idServicio} | [objeto] | actualiza un servicio |
| 5 | v1         | servicios                   | DELETE   | /v1/servicio/{idServicio} |  | no elimina el registro, actualiza el estatus a false |


## endpoints Cargos:

| id | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|----|------------|-----------------------------|--------|-------------|---------|------------|
| 6 | v1         | cargos                       | POST   | /v1/cargo | [objeto] | Registra un cargo |
| 7 | v1         | cargos                       | GET    | /v1/cargo  | | devuelve la lista de los cargos con cualquier estado |
| 8 | v1         | cargos                       | GET    | /v1/cargo/usuario/{idCliente}  | | devuelve la lista de los cargos especificamente de un usuario de cualquier estado |


## endpoints Prorrogas:

| id | Versión    | colección/Documento/Store  | método | Controlador | Entrada | Descripción|
|----|------------|----------------------------|--------|-------------|---------|------------|
| 9  | v1         | prorroga                   | POST   | /v1/prorroga |[objeto] | Registra una prorroga |
| 10 | v1         | prorroga                   | GET    | /v1/prorroga |filtros=[campo]:[operador]:[valor] | devuelve la lista de las prorrogas con cualquier estado |
| 11 | v1         | prorroga                   | GET    | /v1/prorroga/usuario/{idCliente} |  | devuelve la lista de los cargos especificamente de un usuario de cualquier estado |
| 12 | v1         | prorroga                   | PUT    | /v1/prorroga/ | [objeto] | actualiza una prorroga |


## endpoints Condonacion:

| id  | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|-----|------------|-----------------------------|--------|-------------|---------|------------|
| 13  | v1         | condonacion                 | POST   | /v1/condonacion |[objeto] | Registra una condonacion |
| 14  | v1         | condonacion                 | GET    | /v1/condonacion |filtros=[campo]:[operador]:[valor] | devuelve la lista de las condonaciones con cualquier estado |
| 15  | v1         | condonacion                 | GET    | /v1/condonacion/usuario/{idCliente} |  | devuelve la lista de las condonaciones especificamente de un usuario de cualquier estado |
| 16  | v1         | condonacion                 | PUT    | /v1/condonacion/ | [objeto] | actualiza una condonacion |


## endpoints Pagos:

nota: los pagos se realizarán generalmente por otros programas, estos endpoints serán utilizados para corregir algun detalle.

| id  | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|-----|------------|-----------------------------|--------|-------------|---------|------------|
| 17  | v1         | pagos                       | POST   | /v1/pago    | [objeto] | Registra un pago a un cargo, además cambia el estatus del cargo a Pagado |
| 18  | v1         | pagos                       | GET    | /v1/pago    | filtros=[campo]:[operador]:[valor] | devuelve la lista de los pagos | 
| 19  | v1         | pagos                       | PUT    | /v1/pago/ | [objeto] | actualiza un pago |
| 20  | v1         | pagos                       | DELETE | /v1/pago/{idCargo} |  | elimina el pago a partir de un id de cargo, este endpoint elimina el registro en la base de datos  |


## endpoints Facturacion:

| id  | Versión    | colección/Documento/Store   | método | Controlador     | Entrada | Descripción|
|-----|------------|-----------------------------|--------|-----------------|---------|------------|
| 21  | v1         | facturacion                 | POST   | /v1/facturacion | [objeto] | Registra los datos para que el area de contabilidad realize una factura |
| 22  | v1         | facturacion                 | GET    | /v1/facturacion | filtros=[campo]:[operador]:[valor] | devuelve la lista de las solicitudes de facturas | 
| 23  | v1         | facturacion                 | PUT    | /v1/facturacion | [objeto] | actualiza una solicitud de facturacion |


## endpoints Cuentas:

nota: los pagos se realizarán generalmente por otros programas, estos endpoints serán utilizados para corregir algun detalle.

| id  | Versión    | colección/Documento/Store   | método | Controlador | Entrada | Descripción|
|-----|------------|-----------------------------|--------|-------------|---------|------------|
| 24  | v1         | cuentas                     | POST   | /v1/cuenta  | [objeto] | Registra una cuenta bancaria |
| 25  | v1         | cuentas                     | GET    | /v1/cuenta    | filtros=[campo]:[operador]:[valor] | devuelve la lista de las cuentas | 
| 26  | v1         | cuentas                     | PUT    | /v1/cuenta  | [objeto] | actualiza una cuenta |
| 27  | v1         | cuentas                     | DELETE | /v1/cuenta/{idCuenta} |  | elimina una cuenta |


## endpoints Tarjetas:

| id  | Versión    | colección/Documento/Store   | método | Controlador     | Entrada | Descripción|
|-----|------------|-----------------------------|--------|-----------------|---------|------------|
| 28  | v1         | tarjeta                     | POST   | /v1/tarjeta | [objeto] | Registra la tarjeta tokenizada de un usuario |
| 29  | v1         | tarjeta                     | GET    | /v1/tarjeta/{idCliente} | | devuelve la lista de tarjetas registradas de un cliente |
| 30  | v1         | tarjeta                     | DELETE | /v1/tarjeta/{idTarjeta} | | elimina el registro de una tarjeta en especifico |


## endpoints Bitacora:

| id  | Versión    | colección/Documento/Store   | método | Controlador     | Entrada | Descripción|
|-----|------------|-----------------------------|--------|-----------------|---------|------------|
| 31  | v1         | bitacora                    | POST   | /v1/bitacora    | [objeto] | crea un registro en la tabla bitacora, aqui no importa si se repite la referencia,  |
| 32  | v1         | bitacora                    | GET    | /v1/bitacora    | | devuelve la lista de registros activos en la bitacora |
| 33  | v1         | bitacora                    | DELETE | /v1/bitacora    | | actualiza el estatus de la bitacora a false |

