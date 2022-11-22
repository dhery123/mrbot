//Ayuda.jshijoNro1vacio.js
//Camaras de seguridad
//Contamos con camaras, para dar mejor seguridad a nuestros nios.
module.exports = function(controller){controller.hears("Camaras de seguridad","message_received",function(bot,message){bot.reply(message,{text:"Contamos con camaras, para dar mejor seguridad a nuestros nios.",
quick_replies:[{title: "camara 1",payload:"camara 1",},{title: "camara 2",payload:"camara 2",},
]},function() { });});}
//option2