const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');


const listarProrrogas = (req, res) => {

    pool.getConnection().then(async (conn) => {
        const prorrogas = await conn.query("CALL listarProrrogas()");
        
        
        const prorrogas_json = prorrogas[0];
        conn.end();
        //return res.status(200).json(prorrogas_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(prorrogas_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = prorrogas_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = prorrogas_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = prorrogas_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = prorrogas_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = prorrogas_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = prorrogas_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = prorrogas_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = prorrogas_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = prorrogas_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = prorrogas_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = prorrogas_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = prorrogas_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(prorrogas_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(prorrogas_json);
        }
    });
}


const listarProrrogaCliente = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarProrrogaCliente(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}


const registrarProrroga = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { idServicio, idCliente, detalle, fechaExpedicion, fechaVencimiento } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idServicio, idCliente, detalle, fechaExpedicion, fechaVencimiento];
        const prorrogaRegistrada = await 
        conn.query("CALL registrarProrroga(?, ?, ?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(prorrogaRegistrada[0][0]);
    });
}


const actualizarProrroga = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const { idProrroga, idServicio, idCliente, detalle, fechaExpedicion, fechaVencimiento } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ idProrroga, idServicio, idCliente, detalle, fechaExpedicion, fechaVencimiento];
        const prorrogaActualizada = await 
        conn.query("CALL actualizarProrroga(?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(prorrogaActualizada[0][0]);
    });
}


module.exports = {listarProrrogas, listarProrrogaCliente , registrarProrroga, actualizarProrroga}