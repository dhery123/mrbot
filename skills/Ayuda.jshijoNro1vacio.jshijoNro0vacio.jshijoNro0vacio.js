//Ayuda.jshijoNro1vacio.jshijoNro0vacio.js
//camara 1
//esta en vivo
module.exports = function(controller){controller.hears("camara 1","message_received",function(bot,message){bot.reply(message,{text:"esta en vivo",
quick_replies:[
]},function() { });});}