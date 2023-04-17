//nombre.js
//curiosidad
//el cerebro no tiene dolor
module.exports = function(controller){controller.hears("curiosidad","message_received",function(bot,message){bot.reply(message,{text:"el cerebro no tiene dolor",
quick_replies:[
]},function() { });});}