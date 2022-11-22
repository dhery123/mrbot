//Ayuda.js
//Quiero aprender
//Te puedo ensear muchas cosas, entre consejos y cuidados y otras curiosidades para los nios
module.exports = function(controller){controller.hears("Quiero aprender","message_received",function(bot,message){bot.reply(message,{text:"Te puedo ensear muchas cosas, entre consejos y cuidados y otras curiosidades para los nios",
quick_replies:[{title: "Curiosidades",payload:"Curiosidades",},{title: "Test",payload:"Test",},
]},function() { });});}
//option2