const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');


const listarBitacoras = (req, res) => {

    pool.getConnection().then(async (conn) => {
        const bitacoras = await conn.query("CALL listarBitacoras()");
        
        
        const bitacoras_json = bitacoras[0];
        conn.end();
        //return res.status(200).json(bitacoras_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(bitacoras_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = bitacoras_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = bitacoras_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = bitacoras_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = bitacoras_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = bitacoras_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = bitacoras_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = bitacoras_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = bitacoras_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = bitacoras_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = bitacoras_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = bitacoras_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = bitacoras_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(bitacoras_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(bitacoras_json);
        }
    });
}


const registrarBitacora = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { referencia, monto, fecha, estatus } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ referencia, monto, fecha, estatus ];
        const bitacoraRegistrada = await 
        conn.query("CALL registrarBitacora(?, ?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(bitacoraRegistrada[0][0]);
    });
}


const eliminarBitacora = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const bitacoraEliminada = await conn.query("CALL eliminarBitacora(?)", id);
        conn.end();
        return res.status(200).json(bitacoraEliminada[0][0]);
    });
}


module.exports = {listarBitacoras, registrarBitacora, eliminarBitacora}