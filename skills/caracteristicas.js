//
//caracteristicas
//nos caracterizamos por asd
module.exports = function(controller){controller.hears("caracteristicas","message_received",function(bot,message){bot.reply(message,{text:"nos caracterizamos por asd",
quick_replies:[{title: "camarasss",payload:"camarasss",},{title: "disponibilidad",payload:"disponibilidad",},{title: "a",payload:"a",},{title: "aprendizaje",payload:"aprendizaje",},
]},function() { });});}
//option4