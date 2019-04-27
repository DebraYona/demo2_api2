const mongoose = require('mongoose')
const{ Schema}= mongoose


const UsuarioSchema = new Schema({
    idUserStatus: {type: Number, required:true},
    dni: {type: String, required:true},
    nombre: {type: String, required:true},
    apellido: {type: String, required:true},
    tieneAntecedentesPoliciales: {type: Boolean, required:true},
    tieneAntecedentesPenales: {type: Boolean, required:true},

})

module.exports= mongoose.model('Usuario', UsuarioSchema)