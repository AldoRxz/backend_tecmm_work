const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');


const listarCuentas = (req, res) => {

    pool.getConnection().then(async (conn) => {
        const cuentas = await conn.query("CALL listarCuentas()");
        
        
        const cuentas_json = cuentas[0];
        conn.end();
        //return res.status(200).json(cuentas_json);

        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(cuentas_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = cuentas_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = cuentas_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = cuentas_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = cuentas_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = cuentas_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = cuentas_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = cuentas_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = cuentas_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = cuentas_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = cuentas_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = cuentas_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = cuentas_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(cuentas_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(cuentas_json);
        }

    });
}

const listarCuenta = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarCuenta(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}

const registrarCuenta = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { banco, convenio, claveBancaria } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ banco, convenio, claveBancaria ];
        const cuentaRegistrada = await 
        conn.query("CALL registrarCuenta(?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(cuentaRegistrada[0][0]);
    });
}


const actualizarCuenta = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const { idCuenta, banco, convenio, claveBancaria } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ idCuenta, banco, convenio, claveBancaria ];
        const cuentaActualizada = await 
        conn.query("CALL actualizarCuenta(?, ?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(cuentaActualizada[0][0]);
    });
}

const eliminarCuenta = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const cuentaEliminada = await conn.query("CALL eliminarCuenta(?)", id);
        conn.end();
        return res.status(200).json(cuentaEliminada[0][0]);
    });
}


module.exports = {listarCuentas,listarCuenta, registrarCuenta, actualizarCuenta, eliminarCuenta}