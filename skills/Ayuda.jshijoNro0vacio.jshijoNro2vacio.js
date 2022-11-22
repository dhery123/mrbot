//Ayuda.jshijoNro0vacio.js
//Cursos vacacionales
//Ofrecemos cursos vacacionales en distintas areas, enseamos de manera practica y teorica.
module.exports = function(controller){controller.hears("Cursos vacacionales","message_received",function(bot,message){bot.reply(message,{text:"Ofrecemos cursos vacacionales en distintas areas, enseamos de manera practica y teorica.",
quick_replies:[{title: "Ajedrez",payload:"Ajedrez",},{title: "Arte y pintura",payload:"Arte y pintura",},{title: "Experimientos",payload:"Experimientos",},{title: "Origami",payload:"Origami",},
]},function() { });});}
//option4