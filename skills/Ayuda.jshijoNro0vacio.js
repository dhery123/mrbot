//Ayuda.js
//Servicios
//Tenemos varios servicios para ofrecerte, te enseare los siguientes servicios principales.
module.exports = function(controller){controller.hears("Servicios","message_received",function(bot,message){bot.reply(message,{text:"Tenemos varios servicios para ofrecerte, te enseare los siguientes servicios principales.",
quick_replies:[{title: "Apoyo escolar",payload:"Apoyo escolar",},{title: "Apoyo psicopedádogico",payload:"Apoyo psicopedádogico",},{title: "Cursos vacacionales",payload:"Cursos vacacionales",},{title: "Estimulacion temprana",payload:"Estimulacion temprana",},
]},function() { });});}
//option4