module.exports = function(controller) {

  controller.hears('hola','message_received', function(bot, message) {

    bot.reply(message, {
        text: '¡Hola!, unete a nosotros!! nos especializamos en:',
        quick_replies: [
            {
                title: 'Servicios',
                payload: 'info'
            },
            {
                title: 'Instalaciones',
                payload: 'test'
            },
            {
                title: 'Seguridad',
                payload: 'test'
            },
        
        ]
      },function() {});


      });

}
