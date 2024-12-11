const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');

const listarFactorSanguineos = (req, res) => {
    pool.getConnection().then(async (conn) => {
        const sanguineo = await conn.query("CALL listarFactorSanguineos()");
        
        const sanguineo_json = sanguineo[0];
        conn.end();
        //return res.status(200).json(sanguineo_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(sanguineo_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = sanguineo_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = sanguineo_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = sanguineo_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = sanguineo_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = sanguineo_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = sanguineo_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = sanguineo_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = sanguineo_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = sanguineo_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = sanguineo_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = sanguineo_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = sanguineo_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(sanguineo_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(sanguineo_json);
        }

    });
    
}

const registrarFactorSanguineo = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {factor} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [factor];
        const factorRegistrado = await conn.query("CALL registrarFactorSanguineo(?)", arreglo);
        conn.end();
        return res.status(200).json(factorRegistrado[0][0]);
    });
}


const actualizarFactorSanguineo = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idFactorSanguineo, factor} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idFactorSanguineo, factor];
        const factorActualizado = await 
        conn.query("CALL actualizarFactorSanguineo(?, ?)", arreglo);
        conn.end();
        return res.status(200).json(factorActualizado[0][0]);
    });
}


const eliminarFactorSanguineo = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const factorEliminado = await conn.query("CALL eliminarFactorSanguineo(?)", id);
        conn.end();
        return res.status(200).json(factorEliminado[0][0]);
    });
}



module.exports = {listarFactorSanguineos, registrarFactorSanguineo, actualizarFactorSanguineo, eliminarFactorSanguineo}