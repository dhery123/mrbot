//caracteristicas.js
//camarasss
//tenemos camarasss grabando las 24 hrs
module.exports = function(controller){controller.hears("camarasss","message_received",function(bot,message){bot.reply(message,{text:"tenemos camarasss grabando las 24 hrs",
quick_replies:[{title: "vacio0",payload:"vacio0",},
]},function() { });});}
//option1