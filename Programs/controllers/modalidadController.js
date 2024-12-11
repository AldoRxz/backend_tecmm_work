const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');


const listarModalidades = (req, res) => {

    pool.getConnection().then(async (conn) => {
        const modalidades = await conn.query("CALL listarModalidades()");
        
        
        const modalidades_json = modalidades[0];
        conn.end();
        //return res.status(200).json(modalidades_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(modalidades_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = modalidades_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = modalidades_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = modalidades_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = modalidades_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = modalidades_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = modalidades_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = modalidades_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = modalidades_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = modalidades_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = modalidades_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = modalidades_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = modalidades_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(modalidades_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(modalidades_json);
        }
    });
}

const listarModalidad = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarModalidad(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}


const registrarModalidad = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { nombre } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [nombre];
        const modalidadRegistrada = await 
        conn.query("CALL registrarModalidad(?)", arreglo);
        conn.end();

        return res.status(200).json(modalidadRegistrada[0][0]);
    });
}


const actualizarModalidad = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idModalidad, nombre} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idModalidad, nombre];
        const modalidadActualizada = await 
        conn.query("CALL actualizarModalidad(?, ?)", arreglo);
        conn.end();
        return res.status(200).json(modalidadActualizada[0][0]);
    });
}

const eliminarModalidad = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const modalidadEliminada = await conn.query("CALL eliminarModalidad(?)", id);
        conn.end();
        return res.status(200).json(modalidadEliminada[0][0]);
    });
}


module.exports = {listarModalidades, listarModalidad, registrarModalidad, actualizarModalidad, eliminarModalidad}