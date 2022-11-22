var express = require('express');
var bodyParser = require('body-parser');
var querystring = require('querystring');
var debug = require('debug')('botkit:webserver');
var http = require('http');
var fs = require('fs');
var hbs = require('express-hbs');
const Form = require('./dataform');
const { data } = require('node-env-file');
module.exports = function(controller) {


    var webserver = express();
    webserver.use(bodyParser.json());
    webserver.use(bodyParser.urlencoded({ extended: true }));

    // set up handlebars ready for tabs
    webserver.engine('hbs', hbs.express4({partialsDir: __dirname + '/../views/partials'}));
    webserver.set('view engine', 'hbs');
    webserver.set('views', __dirname + '/../views/');

    webserver.use(express.static('public'));

    var server = http.createServer(webserver);

    webserver.set('port',process.env.PORT || 3000, null, function() {

        debug('Express webserver configured and listening at http://localhost:' + process.env.PORT || 3000);

    });
    const servicio = server.listen(webserver.get('port'), ()=>{
        console.log('server on port ');
    })
   

    // import all the pre-defined routes that are present in /components/routes
    var normalizedPathToRoutes = require('path').join(__dirname, 'routes');
    if (fs.existsSync(normalizedPathToRoutes)) {
        fs.readdirSync(normalizedPathToRoutes).forEach(function (file) {
            require('./routes/' + file)(webserver, controller);
        });
    }
   
    controller.webserver = webserver;
    controller.httpserver = server;
    const SocketIO = require('socket.io');
    const io = SocketIO(servicio);
    
    
    io.on('connection', (socket)=>{
       
        const emitDate = async() => {
            const Forms = await Form.find();
            io.emit('server:loadForm',Forms)
        }
        emitDate()

        const Query = async () => {
            console.log('hola');
            socket.on('date', async (data) => {
                
                const Forms = await Form.find({fecha_cita:data.fecha_cita});
                console.log(Forms)
                io.emit('server:Query',Forms)
              });
              
        

       
            
        }
        Query()
            
        
    });  

    
    return webserver;
    

};
