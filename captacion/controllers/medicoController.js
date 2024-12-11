const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');

const listarMedicos = (req, res) => {
    pool.getConnection().then(async (conn) => {
        const medicos = await conn.query("CALL listarMedicos()");
        
        const medicos_json = medicos[0];
        conn.end();
        //return res.status(200).json(medicos_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(medicos_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = medicos_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = medicos_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = medicos_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = medicos_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = medicos_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = medicos_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = medicos_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = medicos_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = medicos_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = medicos_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = medicos_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = medicos_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(medicos_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(medicos_json);
        }
    });
    
}

const registrarMedico = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const { idAspirante, idTipoSeguro, numeroSeguro, numeroClinica, contactoEmergencia, tutor, telefonoTutor, paisTutor, estadoTutor, municipioTutor, coloniaTutor, direccionTutor } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ idAspirante, idTipoSeguro, numeroSeguro, numeroClinica, contactoEmergencia, tutor, telefonoTutor, paisTutor, estadoTutor, municipioTutor, coloniaTutor, direccionTutor ];
        const medicoRegistrado = await conn.query("CALL registrarMedico(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(medicoRegistrado[0][0]);
    });
}




module.exports = {listarMedicos, registrarMedico}