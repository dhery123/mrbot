//Servicios.js
//Problemas de habla
//Escriba respuesta a la palabra clave
module.exports = function(controller){controller.hears("Problemas de habla","message_received",function(bot,message){bot.reply(message,{text:"Escriba respuesta a la palabra clave",
quick_replies:[{title: "problemass de expresion",payload:"problemass de expresion",},{title: "problemass ",payload:"problemass ",},
]},function() { });});}
//option2