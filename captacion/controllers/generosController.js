const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');

const listarGenero = (req, res) => {
    pool.getConnection().then(async (conn) => {
        const genero = await conn.query("CALL listarGenero()");
        
        const genero_json = genero[0];
        conn.end();
        //return res.status(200).json(genero_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(genero_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = genero_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = genero_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = genero_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = genero_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = genero_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = genero_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = genero_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = genero_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = genero_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = genero_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = genero_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = genero_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(genero_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(genero_json);
        }
    });
    
}

const registrarGenero = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {genero} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [genero];
        const generoRegistrado = await conn.query("CALL registrarGenero(?)", arreglo);
        conn.end();
        return res.status(200).json(generoRegistrado[0][0]);
    });
}


const actualizarGenero = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idGenero, genero} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idGenero, genero];
        const generoActualizado = await 
        conn.query("CALL actualizarGenero(?, ?)", arreglo);
        conn.end();
        return res.status(200).json(generoActualizado[0][0]);
    });
}


const eliminarGenero = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const generoEliminado = await conn.query("CALL eliminarGenero(?)", id);
        conn.end();
        return res.status(200).json(generoEliminado[0][0]);
    });
}


module.exports = {listarGenero, registrarGenero, actualizarGenero, eliminarGenero}