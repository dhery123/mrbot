const Form = require('../dataform');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

module.exports = function(webserver, controller) {

const mail = {
    user: 'reptex123@gmail.com',
    pass: 'eymbuoycrchfhqjs'
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'reptex123@gmail.com',
      pass: 'eymbuoycrchfhqjs'
    },
  });
  
  transporter.verify().then(()=>{
    console.log('listo para enviar email')
  })

  const sendEmail = async (email, subject, html) => {
    try {
        
        await transporter.sendMail({
            from: `reptex123@gmail.com`, // sender address
            to: 'dherychoque@gmail.com', // list of receivers
            subject, // Subject line
            text: "Hola amigos, suscríbance para más videos", // plain text body
            html, // html body
        });

    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }

  const getTemplate = (nombre, token) => {
      return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://i.imgur.com/eboNR82.png" alt="">
            <h2>Hola ${ nombre }</h2>
            <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
            <a
                href="http://localhost:3000/confirm/${ token }"
                target="_blank"
            >Confirmar Cuenta</a>
        </div>
      `;
  }

const getToken = (payload) => {
    return jwt.sign({
        data: payload
    }, 'SECRET', { expiresIn: '1h' });
}

const getTokenData = (token) => {
    let data = null;
    jwt.verify(token, 'SECRET', (err, decoded) => {
        if(err) {
            console.log('Error al obtener data del token');
        } else {
            data = decoded;
        }
    });

    return data;
}

const signUp = async (req, res) => {
    try {

        
        // Obtener la data del usuario: nombre, email
        const { nombre, email, apellido, telf, business, servicio, fecha_cita, hora_cita} = req.body;

        // Verificar que el usuario no exista
        //let user = await Form.findOne({ email }) || null;

        //if(user !== null) {
        //    return res.json({
        //        success: false,
        //        msg: 'Usuario ya existe'
        //    });
        //}

        // Generar el código
        const code = uuidv4();

        // Crear un nuevo usuario
        user = new Form({ nombre, email, code, apellido, telf, business, servicio, fecha_cita, hora_cita});

        // Generar token
        const token = getToken({ email, code });

        // Obtener un template
        const template = getTemplate(nombre, token);

        // Enviar el email
        await sendEmail(email, 'Este es un email de prueba', template);
        await user.save();

        res.json({
            success: true,
            msg: 'Registrado correctamente'
        });

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error al registrar usuario'
        });
    }
}

const confirm = async (req, res) => {
    try {
        console.log('Hola mundo')
       // Obtener el token
       const { token } = req.params;
       
       // Verificar la data
       const data = await getTokenData(token);

       if(data === null) {
            return res.json({
                success: false,
                msg: 'Error al obtener data'
            });
       }

    
       const { email, code } = data.data;

       // Verificar existencia del usuario
       const user = await Form.findOne({ email }) || null;
       console.log(user)
       //if(user === null) {
       //     return res.json({
       //         success: false,
       //         msg: 'Usuario no existe'
       //     });
       //}
       // Verificar el código
       
       if(code !== user.code) {
            return res.redirect('/error.html');
       }
       

       // Actualizar usuario
       user.status = 'VERIFIED';
       await user.save();

       // Redireccionar a la confirmación
       return res.redirect('/confirm.html');
        
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error al confirmar usuario'
        });
    }
}


module.exports = {
    signUp,
    confirm
}
}