//Ayuda.jshijoNro0vacio.jshijoNro2vacio.js
//Experimientos
//Damos enseñanza de experimentos caseros 
module.exports = function(controller){controller.hears("Experimientos","message_received",function(bot,message){bot.reply(message,{text:"Damos enseñanza de experimentos caseros ",
quick_replies:[
]},function() { });});}