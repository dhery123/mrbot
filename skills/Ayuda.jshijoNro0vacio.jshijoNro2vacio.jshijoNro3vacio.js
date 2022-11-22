//Ayuda.jshijoNro0vacio.jshijoNro2vacio.js
//Origami
//El origami nos enseña a desarrollar el cerebro.
module.exports = function(controller){controller.hears("Origami","message_received",function(bot,message){bot.reply(message,{text:"El origami nos enseña a desarrollar el cerebro.",
quick_replies:[
]},function() { });});}