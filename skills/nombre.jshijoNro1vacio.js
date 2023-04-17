//nombre.js
//adivinanza
//tengo cola y no soy un animal
module.exports = function(controller){controller.hears("adivinanza","message_received",function(bot,message){bot.reply(message,{text:"tengo cola y no soy un animal",
quick_replies:[
]},function() { });});}