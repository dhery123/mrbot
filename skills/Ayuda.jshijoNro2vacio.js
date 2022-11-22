//Ayuda.js
//Nosotros
//Somos un centro de enseanza orientado a ensear y ayudar a los nios
module.exports = function(controller){controller.hears("Nosotros","message_received",function(bot,message){bot.reply(message,{text:"Somos un centro de enseanza orientado a ensear y ayudar a los nios",
quick_replies:[{title: "Visión",payload:"Visión",},{title: "Misión",payload:"Misión",},{title: "Ubicación",payload:"Ubicación",},{title: "Contactanos",payload:"Contactanos",},
]},function() { });});}
//option4