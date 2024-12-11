const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');


const listarCondonaciones = (req, res) => {

    pool.getConnection().then(async (conn) => {
        const condonaciones = await conn.query("CALL listarCondonaciones()");
        
        
        const condonaciones_json = condonaciones[0];
        conn.end();
        //return res.status(200).json(condonaciones_json);
 
        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(condonaciones_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = condonaciones_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = condonaciones_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = condonaciones_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = condonaciones_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = condonaciones_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = condonaciones_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = condonaciones_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = condonaciones_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = condonaciones_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = condonaciones_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = condonaciones_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = condonaciones_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(condonaciones_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(condonaciones_json);
        }
    });
}

const listarCondonacion = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarCondonacion(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}


const registrarCondonacion = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { idServicio, idCliente, detalle, fechaExpedicion, estatus } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idServicio, idCliente, detalle, fechaExpedicion, estatus];
        const condonacionRegistrada = await 
        conn.query("CALL registrarCondonacion(?, ?, ?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(condonacionRegistrada[0][0]);
    });
}


const actualizarCondonacion = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const { idCondonacion, idServicio, idCliente, detalle, fechaExpedicion, estatus } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ idCondonacion, idServicio, idCliente, detalle, fechaExpedicion, estatus];
        const condonacionActualizada = await 
        conn.query("CALL actualizarCondonacion(?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(condonacionActualizada[0][0]);
    });
}



module.exports = {listarCondonaciones,listarCondonacion, registrarCondonacion, actualizarCondonacion}