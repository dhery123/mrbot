//niño.js
//enseñanza
//Escriba respuesta a la palabra clave
module.exports = function(controller){controller.hears("enseñanza","message_received",function(bot,message){bot.reply(message,{text:"Escriba respuesta a la palabra clave",
quick_replies:[
]},function() { });});}