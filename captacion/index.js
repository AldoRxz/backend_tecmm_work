const express = require('express');
const app = express();
const bodyParser= require('body-parser');

const {appPort} = require("./config/env");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/prueba', require('./routes/prueba'));
app.use('/factorSanguineo', require('./routes/factorSanguineo'));
app.use('/generos', require('./routes/generos'));
app.use('/examen', require('./routes/examen'));
app.use('/convocatoria', require('./routes/convocatoria'));
app.use('/etapa', require('./routes/etapa'));
app.use('/aspirante', require('./routes/aspirante'));
app.use('/historial', require('./routes/historialEtapa'));
app.use('/medico', require('./routes/medico'));


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