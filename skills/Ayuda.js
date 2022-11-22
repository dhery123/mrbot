//
//Ayuda
//Te ayudare en lo que me digas solo pide ayuda. Mira en que puedo ayudarte.
module.exports = function(controller){controller.hears("Ayuda","message_received",function(bot,message){bot.reply(message,{text:"Te ayudare en lo que me digas solo pide ayuda. Mira en que puedo ayudarte.",
quick_replies:[{title: "Servicios",payload:"Servicios",},{title: "Seguridad",payload:"Seguridad",},{title: "Nosotros",payload:"Nosotros",},{title: "Quiero aprender",payload:"Quiero aprender",},
]},function() { });});}
//option4