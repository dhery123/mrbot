//Ayuda.jshijoNro0vacio.jshijoNro0vacio.js
//Ejemplo
//esto es un ejemplo
module.exports = function(controller){controller.hears("Ejemplo","message_received",function(bot,message){bot.reply(message,{text:"esto es un ejemplo",
quick_replies:[
]},function() { });});}