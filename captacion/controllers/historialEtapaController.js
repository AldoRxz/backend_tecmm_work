const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');


const listarHistorial = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarHistorial(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}


const registrarHistorial = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { idAspirante, idEtapa, fecha } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ idAspirante, idEtapa, fecha ];
        const historialRegistrado = await 
        conn.query("CALL registrarHistorial(?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(historialRegistrado[0][0]);
    });
}


module.exports = { listarHistorial, registrarHistorial }