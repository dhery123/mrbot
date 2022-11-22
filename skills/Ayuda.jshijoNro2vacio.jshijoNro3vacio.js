//Ayuda.jshijoNro2vacio.js
//Contactanos
//Nos puede contactar al 72415258 o buscanos en Facebook o Twitter
module.exports = function(controller){controller.hears("Contactanos","message_received",function(bot,message){bot.reply(message,{text:"Nos puede contactar al 72415258 o buscanos en Facebook o Twitter",
quick_replies:[
]},function() { });});}