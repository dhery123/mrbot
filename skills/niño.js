//
//niño
//hola
module.exports = function(controller){controller.hears("niño","message_received",function(bot,message){bot.reply(message,{text:"hola",
quick_replies:[{title: "enseñanza",payload:"enseñanza",},{title: "comunicación",payload:"comunicación",},
]},function() { });});}
//option2