const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');

const listarAspirantes = (req, res) => {
    pool.getConnection().then(async (conn) => {
        const aspirates = await conn.query("CALL listarAspirantes()");
        
        const aspirantes_json = aspirates[0];
        conn.end();
        //return res.status(200).json(aspirantes_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(aspirantes_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = aspirantes_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = aspirantes_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = aspirantes_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = aspirantes_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = aspirantes_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = aspirantes_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = aspirantes_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = aspirantes_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = aspirantes_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = aspirantes_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = aspirantes_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = aspirantes_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(aspirantes_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(aspirantes_json);
        }
    });
    
}


const listarAspirante = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarAspirante(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}


const registrarAspirante = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { idAspirante, idFactorSanguineo, idGenero, idConvocatoria, nombre, primerApellido, segundoApellido, telefonoCelular, correo, curp, paisNacimiento, estadoNacimiento, municipioNacimiento, fechaNacimiento } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ idAspirante, idFactorSanguineo, idGenero, idConvocatoria, nombre, primerApellido, segundoApellido, telefonoCelular, correo, curp, paisNacimiento, estadoNacimiento, municipioNacimiento, fechaNacimiento ];
        const aspitanteRegistrado = await 
        conn.query("CALL registrarAspirante(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(aspitanteRegistrado[0][0]);
    });
}


const actualizarAspirante = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idAspirante, idFactorSanguineo, idGenero, idConvocatoria, nombre, primerApellido, segundoApellido, telefonoCelular, correo, curp, paisNacimiento, estadoNacimiento, municipioNacimiento, fechaNacimiento} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idAspirante, idFactorSanguineo, idGenero, idConvocatoria, nombre, primerApellido, segundoApellido, telefonoCelular, correo, curp, paisNacimiento, estadoNacimiento, municipioNacimiento, fechaNacimiento];
        const aspiranteActualizado = await 
        conn.query("CALL actualizarAspirante(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(aspiranteActualizado[0][0]);
    });
}



module.exports = {listarAspirantes, listarAspirante, registrarAspirante, actualizarAspirante }