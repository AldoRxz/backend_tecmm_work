const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');

const listarCarreras = (req, res) => {
    pool.getConnection().then(async (conn) => {
        const carrera = await conn.query("CALL listarCarreras()");
        
        const carreras_json = carrera[0];
        conn.end();


        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(carreras_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = carreras_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = carreras_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = carreras_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = carreras_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = carreras_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = carreras_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = carreras_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = carreras_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = carreras_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = carreras_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = carreras_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = carreras_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(carreras_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(carreras_json);
        }

    });
    
}

const registrarCarrera = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {nombre, nombreCorto} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [nombreCorto, nombre];
        const carreraRegistrada = await conn.query("CALL registrarCarrera(?, ?)", arreglo);
        conn.end();
        return res.status(200).json(carreraRegistrada[0][0]);
    });
}

const actualizarCarrera = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idCarrera, nombre, nombreCorto} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idCarrera, nombreCorto, nombre];
        const carreraActualizada = await conn.query("CALL actualizarCarrera(?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(carreraActualizada[0][0]);
    });
}

const eliminarCarrera = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const carreraElimionada = await conn.query("CALL eliminarCarrera(?)", id);
        conn.end();
        return res.status(200).json(carreraElimionada[0][0]);
    });
}


module.exports = {listarCarreras, registrarCarrera, actualizarCarrera, eliminarCarrera}