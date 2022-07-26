//Servicios.js
//Evaluación diagnostica
//Evaluamos al infante
module.exports = function(controller){controller.hears("Evaluación diagnostica","message_received",function(bot,message){bot.reply(message,{text:"Evaluamos al infante",
quick_replies:[{title: "Evaluacion escrita",payload:"Evaluacion escrita",},{title: "Evaluacion oral",payload:"Evaluacion oral",},
]},function() { });});}
//option2