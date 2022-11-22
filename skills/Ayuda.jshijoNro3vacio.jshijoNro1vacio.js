//Ayuda.jshijoNro3vacio.js
//Test
//Aprende a interpretar algunos Tests
module.exports = function(controller){controller.hears("Test","message_received",function(bot,message){bot.reply(message,{text:"Aprende a interpretar algunos Tests",
quick_replies:[
]},function() { });});}