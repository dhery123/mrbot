//Ayuda.jshijoNro2vacio.js
//Ubicación
//Nos ubicamos en la calle 17 de agosto Nro. 297
module.exports = function(controller){controller.hears("Ubicación","message_received",function(bot,message){bot.reply(message,{text:"Nos ubicamos en la calle 17 de agosto Nro. 297",
quick_replies:[
]},function() { });});}