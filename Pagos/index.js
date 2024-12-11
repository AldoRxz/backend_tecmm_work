const express = require('express');
const app = express();
const bodyParser= require('body-parser');

const {appPort} = require("./config/env");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/prueba', require('./routes/prueba'));
app.use('/prorroga', require('./routes/prorroga'));
app.use('/condonacion', require('./routes/condonacion'));
app.use('/cuenta', require('./routes/cuenta'));
app.use('/tarjeta', require('./routes/tarjeta'));
app.use('/bitacora', require('./routes/bitacora'));


const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

app.listen(appPort, () => {
    console.log('server running 3000');
});