//
//nombre
//mi nombre es brandom podemos hablar de lo siguiente
module.exports = function(controller){controller.hears("nombre","message_received",function(bot,message){bot.reply(message,{text:"mi nombre es brandom podemos hablar de lo siguiente",
quick_replies:[{title: "chiste",payload:"chiste",},{title: "adivinanza",payload:"adivinanza",},{title: "curiosidad",payload:"curiosidad",},
]},function() { });});}
//option3