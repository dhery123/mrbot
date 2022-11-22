//Ayuda.jshijoNro3vacio.js
//Curiosidades
//Test psicologicos
module.exports = function(controller){controller.hears("Curiosidades","message_received",function(bot,message){bot.reply(message,{text:"Test psicologicos",
quick_replies:[
]},function() { });});}