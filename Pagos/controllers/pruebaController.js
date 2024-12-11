//const pool = require("../config/mariadb");

const prueba = (req, res) => {
    res.status(200).json(
        {
            ok: true,
            valor: "hola",
            numero: 455
        }
    );
}

module.exports = {
    prueba
}