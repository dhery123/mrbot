//Ayuda.js
//Seguridad
//El centro de enseanza CEEDISC cuenta con mucha seguridad para nuestros nios, entre las principales tenemos.
module.exports = function(controller){controller.hears("Seguridad","message_received",function(bot,message){bot.reply(message,{text:"El centro de enseanza CEEDISC cuenta con mucha seguridad para nuestros nios, entre las principales tenemos.",
quick_replies:[{title: "Camaras de seguridad",payload:"Camaras de seguridad",},{title: "Personal capacitado",payload:"Personal capacitado",},
]},function() { });});}
//option3