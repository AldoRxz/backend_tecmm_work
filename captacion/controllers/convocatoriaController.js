const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');

const listarConvocatorias = (req, res) => {
    pool.getConnection().then(async (conn) => {
        const convocatorias = await conn.query("CALL listarConvocatorias()");
        
        const convocatorias_json = convocatorias[0];
        conn.end();
        //return res.status(200).json(convocatorias_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(convocatorias_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = convocatorias_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = convocatorias_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = convocatorias_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = convocatorias_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = convocatorias_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = convocatorias_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = convocatorias_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = convocatorias_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = convocatorias_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = convocatorias_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = convocatorias_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = convocatorias_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(convocatorias_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(convocatorias_json);
        }

    });
    
}

const listarConvocatoria = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarConvocatoria(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}


const registrarConvocatorias = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { idExamen, idOferta, idPeriodo, fechaInicio, fechaFin, fechaPagoExamen, fechaPagoInscripcion, fechaExamen, estatus } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ idExamen, idOferta, idPeriodo, fechaInicio, fechaFin, fechaPagoExamen, fechaPagoInscripcion, fechaExamen, estatus ];
        const convocatoriaRegistrada = await 
        conn.query("CALL registrarConvocatorias(?, ?, ?, ?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(convocatoriaRegistrada[0][0]);
    });
}


const actualizarConvocatoria = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idConvocatoria, idExamen, idOferta, idPeriodo, fechaInicio, fechaFin, fechaPagoExamen, fechaPagoInscripcion, fechaExamen, estatus} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idConvocatoria, idExamen, idOferta, idPeriodo, fechaInicio, fechaFin, fechaPagoExamen, fechaPagoInscripcion, fechaExamen, estatus];
        const convocatoriaActualizada = await 
        conn.query("CALL actualizarConvocatoria(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(convocatoriaActualizada[0][0]);
    });
}


const eliminarConvocatoria = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const convocatoriaEliminada = await conn.query("CALL eliminarConvocatoria(?)", id);
        conn.end();
        return res.status(200).json(convocatoriaEliminada[0][0]);
    });
}


module.exports = {listarConvocatorias, listarConvocatoria, registrarConvocatorias, actualizarConvocatoria, eliminarConvocatoria}