const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');


const listarEspecialidades = (req, res) => {

    pool.getConnection().then(async (conn) => {
        const especialidades = await conn.query("CALL listarEspecialidades()");
        
        
        const especialidades_json = especialidades[0];
        conn.end();
        //return res.status(200).json(especialidades_json);
        
        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(especialidades_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = especialidades_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = especialidades_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = especialidades_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = especialidades_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = especialidades_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = especialidades_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = especialidades_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = especialidades_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = especialidades_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = especialidades_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = especialidades_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = especialidades_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(especialidades_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(especialidades_json);
        }
    });
}


const listarEspecialidad = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarEspecialidad(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}


const registrarEspecialidad = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { idUnidad, codigo, nombreCorto, nombre, creditos, estatus } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idUnidad, codigo, nombreCorto, nombre, creditos, estatus];
        const especialidadRegistrada = await 
        conn.query("CALL registrarEspecialidad(?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(especialidadRegistrada[0][0]);
    });
}


const actualizarEspecialidad = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idEspecialidad, idUnidad, codigo, nombreCorto, nombre, creditos, estatus} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idEspecialidad, idUnidad, codigo, nombreCorto, nombre, creditos, estatus];
        const especialidadActualizada = await 
        conn.query("CALL actualizarEspecialidad(?, ?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(especialidadActualizada[0][0]);
    });
}


const eliminarEspecialidad = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const especialidadEliminada = await conn.query("CALL eliminarEspecialidad(?)", id);
        conn.end();
        return res.status(200).json(especialidadEliminada[0][0]);
    });
}




module.exports = {listarEspecialidades, listarEspecialidad, registrarEspecialidad, actualizarEspecialidad, eliminarEspecialidad}