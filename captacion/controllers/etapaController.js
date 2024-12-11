const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');

const listarEtapas = (req, res) => {
    pool.getConnection().then(async (conn) => {
        const etapa = await conn.query("CALL listarEtapas()");
        
        const etapa_json = etapa[0];
        conn.end();
        //return res.status(200).json(etapa_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(etapa_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = etapa_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = etapa_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = etapa_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = etapa_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = etapa_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = etapa_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = etapa_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = etapa_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = etapa_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = etapa_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = etapa_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = etapa_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(etapa_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(etapa_json);
        }
        
    });
    
}


const registrarEtapa = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {nombre} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [nombre];
        const etapaRegistrada = await conn.query("CALL registrarEtapa(?)", arreglo);
        conn.end();
        return res.status(200).json(etapaRegistrada[0][0]);
    });
}


const actualizarEtapa = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idEtapa, nombre} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idEtapa, nombre];
        const etapaActualizada = await 
        conn.query("CALL actualizarEtapa(?, ?)", arreglo);
        conn.end();
        return res.status(200).json(etapaActualizada[0][0]);
    });
}


const eliminarEtapa = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const etapaEliminada = await conn.query("CALL eliminarEtapa(?)", id);
        conn.end();
        return res.status(200).json(etapaEliminada[0][0]);
    });
}



module.exports = {listarEtapas, registrarEtapa, actualizarEtapa, eliminarEtapa}