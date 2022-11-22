//Ayuda.jshijoNro1vacio.js
//Personal capacitado
//Nuestro personal esta capacitado para dar el mejor servicio.
module.exports = function(controller){controller.hears("Personal capacitado","message_received",function(bot,message){bot.reply(message,{text:"Nuestro personal esta capacitado para dar el mejor servicio.",
quick_replies:[
]},function() { });});}