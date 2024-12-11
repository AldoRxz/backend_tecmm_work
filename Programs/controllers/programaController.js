const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');



const listarProgramas = (req, res) => {

    pool.getConnection().then(async (conn) => {
        const programas = await conn.query("CALL listarProgramas()");
        
        
        const programas_json = programas[0];
        conn.end();
        //return res.status(200).json(programas_json);
        
        
        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(programas_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = programas_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = programas_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = programas_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = programas_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = programas_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = programas_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = programas_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = programas_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = programas_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = programas_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = programas_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = programas_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(programas_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(programas_json);
        }
        
    });
}


const listarPrograma = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarPrograma(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}



const registrarPrograma = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { idCarrera, idModalidad, idUnidad, estatus } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idCarrera, idModalidad, idUnidad, estatus];
        const programaRegistrado = await 
        conn.query("CALL registrarPrograma(?, ?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(programaRegistrado[0][0]);
    });
}


const actualizarPrograma = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idPrograma, idCarrera, idModalidad, idUnidad, estatus} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idPrograma, idCarrera, idModalidad, idUnidad, estatus];
        const programaActualizado = await 
        conn.query("CALL actualizarPrograma(?, ?, ?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(programaActualizado[0][0]);
    });
}


const eliminarPrograma = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const programaEliminado = await conn.query("CALL eliminarPrograma(?)", id);
        conn.end();
        return res.status(200).json(programaEliminado[0][0]);
    });
}




module.exports = {listarProgramas, listarPrograma, registrarPrograma, actualizarPrograma, eliminarPrograma}