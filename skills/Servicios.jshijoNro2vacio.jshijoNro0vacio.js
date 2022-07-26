//Servicios.jshijoNro2vacio.js
//problemas de expresion
//resolvemos problemas al momento de expresarse en publico
module.exports = function(controller){controller.hears("problemas de expresion","message_received",function(bot,message){bot.reply(message,{text:"resolvemos problemas al momento de expresarse en publico",
quick_replies:[{title: "expresate",payload:"expresate",},
]},function() { });});}
//option1