var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const FormSchema = new Schema(
    {
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    telf: {type: Number, required: true},
    servicio: {type: String, required: true},
    fecha_cita: {type: String,required: true},

    hora:{ type: String , required: true},

    
},{
    timestamps: true,
    versionkey: false,


});

module.exports = mongoose.model("Formulario",FormSchema)