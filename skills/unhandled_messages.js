module.exports = function(controller) {

    controller.on('message_received', function(bot, message) {

        bot.reply(message, {
            text: 'No entiendo mucho tu lenguaje. Pide `ayuda` para que podamos hablar.',
            
            //quick_replies: [
            //    {
           //      title: 'Ayuda',
           //      payload: 'Ayuda',
           //    },
           //  ]
        });

    });
    controller.hears('hola','message_received', function(bot, message) {

      bot.reply(message,'hola como estas gg');
  
    });
}