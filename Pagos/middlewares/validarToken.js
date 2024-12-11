
const validarToken = async (req, res, next) => {
    console.log("hola desde middleware");
    next();
}



module.exports = validarToken