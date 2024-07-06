/// MODELO ES LA REPRESENTACOIPN DE LA ABSE  DE DATPS 

const {DataTypes} = require("sequelize")
const db        = require("../data/dbConn.js")

const modelarSocks = db.define("medias_productos",{
    // cantidadStock: {type:DataTypes.INTEGER},
    // ventas       : {type:DataTypes.FLOAT},
    // cantidadStock: {type:DataType.INTEGER},
    nombre          : {type:DataTypes.STRING}
})


module.exports = modelarSocks