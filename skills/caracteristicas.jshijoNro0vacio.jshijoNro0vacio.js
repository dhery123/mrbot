//caracteristicas.jshijoNro0vacio.js
//Escriba palabra clave
//Escriba respuesta a la palabra clave
module.exports = function(controller){controller.hears("Escriba palabra clave","message_received",function(bot,message){bot.reply(message,{text:"Escriba respuesta a la palabra clave",
quick_replies:[
]},function() { });});}