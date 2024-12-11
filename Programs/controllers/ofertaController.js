const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');



const listarOfertas = (req, res) => {

    pool.getConnection().then(async (conn) => {
        const ofertas = await conn.query("CALL listarOfertas()");
        
        
        const ofertas_json = ofertas[0];
        conn.end();
        return res.status(200).json(ofertas_json);

        /*
        try{
            const campo = req.query.filtros.campo;
            const operador = req.query.filtros.operador;
            const valor = req.query.filtros.valor;

            if(!campo || !operador || !valor){
                return res.status(200).json(ofertas_json);    
            }

            switch(operador){
                case 'ct':
                    const ct = ofertas_json.filter((elemento) => elemento[campo].includes(valor) );
                    return res.status(200).json(ct);
                    break;
                case 'nct':
                    const nct = ofertas_json.filter((elemento) => !elemento[campo].includes(valor) );
                    return res.status(200).json(nct);
                    break;
                case 'bw':
                    const bw = ofertas_json.filter((elemento) => elemento[campo].startsWith(valor) );
                    return res.status(200).json(bw);
                    break;
                case 'nbw':
                    const nbw = ofertas_json.filter((elemento) => !elemento[campo].startsWith(valor) );
                    return res.status(200).json(nbw);
                    break;
                case 'ew':
                    const ew = ofertas_json.filter((elemento) => elemento[campo].endsWith(valor) );
                    return res.status(200).json(ew);
                    break;
                case 'new':
                    const not_ends_with = ofertas_json.filter((elemento) => !elemento[campo].endsWith(valor) );
                    return res.status(200).json(not_ends_with);
                    break;
                case 'eq':
                    const eq = ofertas_json.filter((elemento) => elemento[campo] === valor );
                    return res.status(200).json(eq);
                    break;
                case 'neq':
                    const neq = ofertas_json.filter((elemento) => elemento[campo] !== valor );
                    return res.status(200).json(neq);
                    break;
                case 'gt':
                    const gt = ofertas_json.filter((elemento) => parseInt(elemento[campo]) > valor );
                    return res.status(200).json(gt);
                    break;
                case 'gte':
                    const gte = ofertas_json.filter((elemento) => parseInt(elemento[campo]) >= valor );
                    return res.status(200).json(gte);
                    break;
                case 'lt':
                    const lt = ofertas_json.filter((elemento) => parseInt(elemento[campo]) < valor );
                    return res.status(200).json(lt);
                    break;
                case 'lte':
                    const lte = ofertas_json.filter((elemento) => parseInt(elemento[campo]) <= valor );
                    return res.status(200).json(lte);
                    break;
            }

            return res.status(200).json(ofertas_json);
        }catch(err){
            console.log(err);
            return res.status(200).json(ofertas_json);
        }

        */
    });
}

const listarOferta = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarOferta(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}


const registrarOferta = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { nombre, version, estatus } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [ nombre, version, estatus ];
        const ofertaRegistrada = await 
        conn.query("CALL registrarOferta(?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(ofertaRegistrada[0][0]);
    });
}


const actualizarOferta = async (req, res) => {
    const validation_errors = validationResult(req);
	if (!validation_errors.isEmpty()) {
		const response = return_error(406, 'Datos con formato incorrecto');
		return res.status(400).json(response);
	}

    const {idOferta, nombre, version, estatus} = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idOferta, nombre, version, estatus];
        const ofertaActualizada = await 
        conn.query("CALL actualizarOferta(?, ?, ?, ?)", arreglo);
        conn.end();
        return res.status(200).json(ofertaActualizada[0][0]);
    });
}

const eliminarOferta = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const ofertaEliminada = await conn.query("CALL eliminarOferta(?)", id);
        conn.end();
        return res.status(200).json(ofertaEliminada[0][0]);
    });
}



module.exports = {listarOfertas, listarOferta, registrarOferta, actualizarOferta, eliminarOferta}