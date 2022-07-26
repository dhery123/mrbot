/* This module kicks in if no Botkit Studio token has been provided */

module.exports = function(controller) {

    controller.on('hello', conductOnboarding);
    controller.on('welcome_back', conductOnboarding);

    function conductOnboarding(bot, message) {

      bot.startConversation(message, function(err, convo) {

        convo.say({
          text: '¡Hola humano! Me llamo brand soy un bot, estoy listo para ayudarte en lo que necesites!',
          quick_replies: [
            {
              title: 'Ayuda',
              payload: 'Ayuda',
            },
          ]
        });


      });

    }

    controller.hears(['Ayuda'], 'message_received', function(bot, message) {

      bot.startConversation(message, function(err, convo) {

        // set up a menu thread which other threads can point at.
        convo.ask({
          text: 'Puedo ayudarte en las siguientes opciones.',
          quick_replies: [
            {
              title: 'Ubicacion',
              payload: 'Ubicacion',
            },
            {
              title: 'Redes sociales',
              payload: 'red social',
            },
            {
              title: 'Contacto',
              payload: 'contacto',
            },
          ]
        },[
          {
            pattern: 'Ubicacion',
            callback: function(res, convo) {
              convo.gotoThread('Ubicacion');
              convo.next();
            }
          },
          {
            pattern: 'red social',
            callback: function(res, convo) {
              convo.gotoThread('red social');
              convo.next();
            }
          },
          {
            pattern: 'contacto',
            callback: function(res, convo) {
              convo.gotoThread('contacto');
              convo.next();
            }
          },
          {
            default: true,
            callback: function(res, convo) {
              convo.gotoThread('end');
            }
          }
        ]);

        // set up docs threads
        convo.addMessage({
          text: 'No entiendo mucho tu lenguaje. Pide `ayuda` para que podamos hablar.'
        },'end');
                
        // set up docs threads
        convo.addMessage({
          text: 'nos ubicamos en la Calle 17 de agosto Nro. 297 ',
        },'Ubicacion');

        convo.addMessage({
          action: 'default'
        }, 'Ubicacion');


        // set up community thread
        convo.addMessage({
          text: 'Siguenos en las siguientes redes sociales',
        },'red social');

        convo.addMessage({
          text: 'Facebook (https://facebook.com)',
        },'red social');

        convo.addMessage({
          text: 'Twitter (https://twitter.com/) ',
        },'red social');

        convo.addMessage({
          action: 'default'
        }, 'red social');



        // set up contact thread
        convo.addMessage({
          text: 'Nos puede contactar al numero 77447468',
        },'contacto');
        convo.addMessage({
          action: 'default'
        }, 'contacto');

      });

    });


}
