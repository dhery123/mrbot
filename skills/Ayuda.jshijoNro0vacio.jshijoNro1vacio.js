//Ayuda.jshijoNro0vacio.js
//Apoyo psicopedádogico
//Damos apoyo psicopedágogico para los niños y adolescentes
module.exports = function(controller){controller.hears("Apoyo psicopedádogico","message_received",function(bot,message){bot.reply(message,{text:"Damos apoyo psicopedágogico para los niños y adolescentes",
quick_replies:[
]},function() { });});}