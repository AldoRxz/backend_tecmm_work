const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');

const listarExamenes = (req, res) => {
    pool.getConnection().then(async (conn) => {
        const examen = await conn.query("CALL listarExamenes()");
        
        const examenes_json = examen[0];
        conn.end();
        //return res.status(200).json(examenes_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(examenes_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = examenes_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = examenes_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = examenes_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = examenes_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = examenes_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = examenes_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = examenes_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = examenes_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = examenes_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = examenes_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = examenes_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = examenes_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(examenes_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(examenes_json);
        }
        
    });
    
}


const registrarExamen = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {nombre} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [nombre];
        const examenRegistrado = await conn.query("CALL registrarExamen(?)", arreglo);
        conn.end();
        return res.status(200).json(examenRegistrado[0][0]);
    });
}


const actualizarExamen = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idExamen, nombre} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idExamen, nombre];
        const examenActualizado = await 
        conn.query("CALL actualizarExamen(?, ?)", arreglo);
        conn.end();
        return res.status(200).json(examenActualizado[0][0]);
    });
}


const eliminarExamen = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const examenEliminado = await conn.query("CALL eliminarExamen(?)", id);
        conn.end();
        return res.status(200).json(examenEliminado[0][0]);
    });
}



module.exports = {listarExamenes, registrarExamen, actualizarExamen, eliminarExamen}