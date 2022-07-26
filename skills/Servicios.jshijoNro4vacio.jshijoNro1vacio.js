//Servicios.jshijoNro4vacio.js
//Evaluacion oral
//Resuleva la evaluacion oral
module.exports = function(controller){controller.hears("Evaluacion oral","message_received",function(bot,message){bot.reply(message,{text:"Resuleva la evaluacion oral",
quick_replies:[
]},function() { });});}