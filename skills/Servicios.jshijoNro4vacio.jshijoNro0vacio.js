//Servicios.jshijoNro4vacio.js
//Evaluacion escrita
//damos evaluacion por escrito
module.exports = function(controller){controller.hears("Evaluacion escrita","message_received",function(bot,message){bot.reply(message,{text:"damos evaluacion por escrito",
quick_replies:[
]},function() { });});}