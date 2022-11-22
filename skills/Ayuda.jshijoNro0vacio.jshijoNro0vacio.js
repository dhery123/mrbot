//Ayuda.jshijoNro0vacio.js
//Apoyo escolar
//Damos apoyo escolar para cualquier materia escolar.
module.exports = function(controller){controller.hears("Apoyo escolar","message_received",function(bot,message){bot.reply(message,{text:"Damos apoyo escolar para cualquier materia escolar.",
quick_replies:[{title: "Ejemplo",payload:"Ejemplo",},
]},function() { });});}
//option1