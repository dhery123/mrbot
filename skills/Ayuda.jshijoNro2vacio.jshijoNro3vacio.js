//Ayuda.jshijoNro2vacio.js
//Contactanos
//Nos puede contactar al 72415258 o buscanos en Facebook o Twitter
module.exports = function(controller){controller.hears("Contactanos","message_received",function(bot,message){bot.reply(message,{text:"Nos puede contactar en la calle 17 de agosto Nro 297, o llamenos al 73870988. Registre su cita en el siguiente enlace links:\n\n[Registrar cita](http://localhost:3000/citas)",
quick_replies:[
]},function() { });});}