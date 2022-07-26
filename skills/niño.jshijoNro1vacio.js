//niño.js
//comunicación
//mi comunicación es niño
module.exports = function(controller){controller.hears("comunicación","message_received",function(bot,message){bot.reply(message,{text:"mi comunicación es niño",
quick_replies:[
]},function() { });});}