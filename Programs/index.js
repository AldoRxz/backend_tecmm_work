const express = require('express');
const app = express();
const bodyParser= require('body-parser');

const {appPort} = require("./config/env");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/prueba', require('./routes/prueba'));
app.use('/carrera', require('./routes/carrera'));
app.use('/modalidad', require('./routes/modalidad'));
app.use('/especialidad', require('./routes/especialidad'))
app.use('/programa', require('./routes/programa'));
app.use('/oferta', require('./routes/oferta'));


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