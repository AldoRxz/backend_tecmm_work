# diccionario de datos microservicio pagos

## tabla: Servicios

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idServicio**    | predeterminado   | integer   | es el id del servicio además de fungir como llave primaria de la tabla |
| **servicio** | 500 | varchar | nombre del servicio ofrecido, ejemplo: derecho a examen de adminsion, reinscripción |
| **monto** | predeterminado | integer | monto a cobrar por el servicio |
| **fechaInicio** | predeterminado | datetime | fecha y hora en la que el servicio estará activo |
| **fechaVencimiento** | predeterminado | datetime |  fecha y hora en la que el servicio dejara de estar activo |
| **estatus** | 1 | boolean | indicador booleano que señala si el registro está activo, si es 1 se debe de tomar en cuenta para cualquier operación si es 0 se debe de ignorar | 


## tabla: Cargos

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idCargos**    | predeterminado   | integer   | es el id del cargo además de fungir como llave primaria de la tabla, el id será  |
| **idServicio**    | predeterminado   | integer | es el id del servicio que se está cobrando |
| **idCliente**    | 50   | varchar | es el identificador con el que se va a diferenciar a los clientes en el microservicio (será utilizada la curp) |
| **periodo**    | predeterminado   | integer | periodo en el que es aplicado el pago, el periodo actual a la fecha en la que se escribio este documento es el 75 |
| **tipo**    | predeterminado   | enum | este campo es para indicar a que tipo de usuario se esta haciendo el cargo (Alumno, Aspirante, Proveedor) |
| **fechaExpedicion**    | predeterminado   | datetime | fecha y hora en la que se registro el cargo |
| **estatus**    | predeterminado   | enum | estatus en el que se encuentra el pago (Activo, Pagado, Vencido, Cancelado) |


## tabla: Prorrogas

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idProrroga** | predeterminado   | integer   | es el id de la prorroga además de fungir como llave primaria de la tabla |
| **idServicio** | predeterminado   | integer   | es el id del servicio que se está realizando la prorroga |
| **idCliente** | 50   | varchar | es el identificador con el que se va a diferenciar a los clientes en el microservicio (será utilizada la curp) |
| **detalle** | 500   | varchar | Aquí se registrarán los datos adicionales a la prorroga |
| **fechaExpedición** | predeterminado | datetime | fecha y hora en la que se registra la prorroga |
| **fechaVencimiento** | predeterminado | datetime | fecha y hora en la que vence la prorroga |


## tabla: Condonacion

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idCondonacion** | predeterminado   | integer | es el id de la condonación además de fungir como llave primaria de la tabla |
| **idServicio** | predeterminado   | integer   | es el id del servicio que se está realizando la condonacion |
| **idCliente** | 50   | varchar | es el identificador con el que se va a diferenciar a los clientes en el microservicio (será utilizada la curp) |
| **detalle** | 500   | varchar | Aquí se registrarán los datos adicionales a la prorroga |
| **fechaExpedición** | predeterminado | datetime | fecha y hora en la que se registra la prorroga |
| **estatus** | predeterminado | enum | estatus en el que se encuentra la condonación (elaborado, validado, verificado, autorizado) |


## tabla: Pagos

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idPago** | predeterminado   | integer | es el id del pago además de fungir como llave primaria de la tabla |
| **idCargo** | predeterminado   | integer | es el id del pago además de fungir como llave primaria de la tabla |
| **tipo** | predeterminado   | enum | campo para definir por que medio se realizo el pago (Ficha, tarjeta, ventanilla) |
| **detalle** | 500   | varchar | campo para registrar cualquier detalle extra referente al pago |
| **fechaPago** | predeterminado   | datetime | fecha y hora en la que se registro el pago |


## tabla: Facturacion

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idFacturacion** | predeterminado   | integer | es el id de los datos de facturacion además de fungir como llave primaria de la tabla |
| **idCargo** | predeterminado   | integer | es el id del cargo del cual el cliente registra los datos para solicitar una factura |
| **idCliente** | 50   | varchar | es el identificador con el que se va a diferenciar a los clientes en el microservicio (será utilizada la curp) |
| **nombre** | 500   | varchar | nombre del solicitante |
| **rfc** | 40   | varchar | rfc del solicitante |
| **correo** | 500   | varchar | correo electronico del solicitante |
| **estado** | 100   | varchar | estado de residencia del solicitante |
| **ciudad** | 200   | varchar | ciudad de residencia del solicitante |
| **municipio** | 200   | varchar | municipio de residencia del solicitante |
| **cp** | 10   | varchar | codigo postal del solicitante |
| **calle** | 200   | varchar | calle del solicitante |
| **numeroExterior** | 15   | varchar | numero exterior del solicitante |
| **numeroInterior** | 15   | varchar | numero interior del solicitante |
| **servicio** | 100   | varchar | servicio al que se solicita la factura |
| **monto** | 8, 2   | decimal | monto de la factura solicitada |
| **uso** | 100   | varchar | uso de la factura solicitada |
| **telefono** | 20   | varchar | telefono del solicitante |
| **fechaSolicitud** | predeterminado   | datetime | fecha y hora en que se solicito la factura |
| **tipo** | 50 | varchar | tipo de factura |


## tabla: Cuentas

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idCuenta** | 50   | varchar | es el número de cuenta bancaria perteneciente al instituto, además de fungir como llave primaria de la tabla |
| **banco** | 100 | varchar | nombre del banco a la que pertenece la cuenta |
| **convenio** | 100 | varchar | convenio del banco a la que pertenece la cuenta |
| **claveInterbancaria** | 100 | varchar | clave interbancaria del banco a la que pertenece la cuenta |


## tabla: Tarjetas

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idTarjeta** | predeterminado   | integer | es el id de la tarjeta además de fungir como llave primaria de la tabla |
| **idCliente** | 50   | varchar | curp del tarjeta habiente |
| **nombre** | 400 | varchar | nombre del tarjeta habiente |
| **correo** | 400 | varchar | correo electronico del tarjeta habiente |
| **bin** | 20 | varchar | id generado por la api de hsbc cuando se tokeniza la tarjeta |
| **token** | 50 | varchar | token por la api de hsbc cuando se tokeniza la tarjeta |
| **anioExpiracion** | 5 | varchar | año de expiración de la tarjeta |
| **mesExpiracion** | 3 | varchar | mes de expiración de la tarjeta |
| **tipo** | predeterminado | enum | solo se aceptarán dos tipos de tarjeta (vi = visa, mc = mastercard) |
| **terminacion** | 5 | varchar | ultimos 4 digitos de la tarjeta, este dato tambien es devuelto por el api de HSBC a la hora de tokenizar |


## tabla: Bitacora

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idBitacora** | predeterminado   | integer | id de movimiento registrado en bitacora |
| **referencia** | 50 | varchar | referencia del pago al que se hace alusion  |
| **monto** | 8, 2 | decimal | monto del pago registrado |
| **fecha** | predeterminado | datetime | fecha y hora en la que se registra el movimiento |
| **estatus** | 1 | boolean | indicador booleano que señala si el registro está activo, si es 1 se debe de tomar en cuenta para cualquier operación si es 0 se debe de ignorar | 


## tabla: Sobrecargos

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idSobrecargo** | predeterminado   | integer | id de sobrecargo |


## tabla: Descuentos

| campo    | tamaño   | tipo     | Descripción |
|----------|----------|----------|-------------|
| **idDescuentos** | predeterminado   | integer | id de descuentos |
