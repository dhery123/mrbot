
const nodemailer = require('nodemailer');
const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const Form = require('../dataform');
const Swal = require('sweetalert2');
const {v4:uuidv4} = require('uuid')
const jwt = require('jsonwebtoken');

module.exports = function(webserver, controller) {
  
// This creates the /embed route, where an easy-to-copy embed code is available


// This creates the /embed route, where an easy-to-copy embed code is available

// index
webserver.get('/', function(req,res) {

  res.render('index', {
    layout: 'layouts/default',
    base_url: req.hostname
  });

});

webserver.get('/CEEDISC', function(req,res) {

  res.render('CEEDISC', {
    layout: 'layouts/default',
    base_url: req.hostname
  });

});

webserver.get('/servicio', function(req,res) {

  res.render('servicio', {
    layout: 'layouts/default',
    base_url: req.hostname
  });

});
webserver.get('/Contacto', function(req,res) {

  res.render('Contacto', {
    layout: 'layouts/default',
    base_url: req.hostname
  });


  
   
});

webserver.get('/errorFecha', function(req,res) {

  res.render('error', {
    layout: 'layouts/default',
    base_url: req.hostname
  });


  
   
});


webserver.get('/citas', async(req,res)=> {
  

  //const forms = await Form.find().lean()
  
  //console.log(forms)
  
  res.render('citas', {
    layout: 'layouts/default',
    base_url: req.hostname,
    //formulario: forms
  });

 

});
webserver.post ('/citas/new', async(req,res)=> {
  var {fecha_cita,hora_cita,email} = req.body;
  const form = Form(req.body);
  const getToken = (payload) => {
    return jwt.sing({
      data: payload
    }, 'SECRET',{espiresIn: '1h'});
  }
  const getTokenData = (token) => {
    let data = null;
    jwt.verify(token,'SECRET',(err, decoded) => {
      if (err) {
        console.log('error')
      }else{
        data = decoded
      }

    })
  }
  const token = getToken({email})
  const verifi = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'reptex123@gmail.com',
      pass: 'eymbuoycrchfhqjs'
    },
  });
  verifi.verify().then(()=>{
    console.log('listo para enviar email')
  })
  
  const code = uuidv4();
  
  

  Form.findOne({"fecha_cita":fecha_cita,"hora_cita":hora_cita},async function(err,usr){ 

    if (usr) {
      
      console.log("Error la cita seleccionada esta ocupada");
      res.redirect('/errorFecha');
    }
    else {
      console.log (code)
      await verifi.sendMail({
        from: '"Hola mundo" <reptex123@gmail.com>', 
        to: "dherychoque@gmail.com", 
        subjet: "hola mundo",
        html: '<a href="http://localhost:3000/citas/confirm/${ token }>click aqui para confirmar la cita </p>',
      })
        console.log("cita libre, registro exitoso!")
        

      
      
    }
  }

  );
  



  
  //let user = await Form.findOne({_doc:{fecha_cita}})//STEP 2
 
 
});


}














 var {fecha_cita,hora_cita,email} = req.body;
  const code = uuidv4();
  
  const form = Form(req.body);
  link="http://localhost:3000/citas/verify?id="+code;
  const verifi = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'reptex123@gmail.com',
      pass: 'eymbuoycrchfhqjs'
    },
  });
  verifi.verify().then(()=>{
    console.log('listo para enviar email')
  })
  
  
  const sendMessage = async (html, email) => {
    try {
      await verifi.sendMail({
        from: '"Hola mundo" <reptex123@gmail.com>', 
        to: "dherychoque@gmail.com", 
        subjet: "hola mundo",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
      })
    } catch (error){

      console.log("error", error);
    }
    


  }

  
  Form.findOne({"fecha_cita":fecha_cita,"hora_cita":hora_cita},async function(err,usr){ 
    if (usr) {
      
      console.log("Error la cita seleccionada esta ocupada");
      res.redirect('/errorFecha');
    }
    else {
      sendMessage()
      console.log (code)
      
        console.log("cita libre, registro exitoso!")
    }
  }

  );

  //let user = await Form.findOne({_doc:{fecha_cita}})//STEP 2
 
 










 webserver.post ('/citas/new', async(req,res)=> {
  FormController.signUp
});
webserver.get(
  '/confirm/:token',
  [],
  UserController.confirm
);

























const nodemailer = require('nodemailer');
const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const Form = require('../dataform');
const Swal = require('sweetalert2');
const {v4:uuidv4} = require('uuid')
const jwt = require('jsonwebtoken');

module.exports = function(webserver, controller) {
  
// This creates the /embed route, where an easy-to-copy embed code is available


// This creates the /embed route, where an easy-to-copy embed code is available

// index
webserver.get('/', function(req,res) {

  res.render('index', {
    layout: 'layouts/default',
    base_url: req.hostname
  });

});

webserver.get('/CEEDISC', function(req,res) {

  res.render('CEEDISC', {
    layout: 'layouts/default',
    base_url: req.hostname
  });

});

webserver.get('/servicio', function(req,res) {

  res.render('servicio', {
    layout: 'layouts/default',
    base_url: req.hostname
  });

});
webserver.get('/Contacto', function(req,res) {

  res.render('Contacto', {
    layout: 'layouts/default',
    base_url: req.hostname
  });


  
   
});

webserver.get('/errorFecha', function(req,res) {

  res.render('error', {
    layout: 'layouts/default',
    base_url: req.hostname
  });


  
   
});


webserver.get('/citas', async(req,res)=> {
  

  //const forms = await Form.find().lean()
  
  //console.log(forms)
  
  res.render('citas', {
    layout: 'layouts/default',
    base_url: req.hostname,
    //formulario: forms
  });

 

});
webserver.post ('/citas/new', async(req,res)=> {
  var {fecha_cita,hora_cita,email} = req.body;
  const constroller = async(req, res) =>{
    

  }


  const form = Form(req.body);
  const getToken = (payload) => {
    return jwt.sing({
      data: payload
    }, 'SECRET',{espiresIn: '1h'});
  }
  const getTokenData = (token) => {
    let data = null;
    jwt.verify(token,'SECRET',(err, decoded) => {
      if (err) {
        console.log('error')
      }else{
        data = decoded
      }

    })
  }
  const token = getToken({email})
  const verifi = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'reptex123@gmail.com',
      pass: 'eymbuoycrchfhqjs'
    },
  });
  verifi.verify().then(()=>{
    console.log('listo para enviar email')
  })
  
  const code = uuidv4();
  const sendMessage = async (html, email) => {
    try {
      await verifi.sendMail({
        from: '"Hola mundo" <reptex123@gmail.com>', 
        to: "dherychoque@gmail.com", 
        subjet: "hola mundo",
        html,
      })
    } catch (error){

      console.log("error", error);
    }


  }
  
  const getTemplate = (token) => {
    return '<a href="http://localhost:3000/citas/confirm/${ token }">click aqui para confirmar la cita </p>'
  }
  
  

  Form.findOne({"fecha_cita":fecha_cita,"hora_cita":hora_cita},async function(err,usr){ 

    if (usr) {
      
      console.log("Error la cita seleccionada esta ocupada");
      res.redirect('/errorFecha');
    }
    else {
      console.log (code)
      
        console.log("cita libre, registro exitoso!")
        

      
      
    }
  }

  );
  



  
  //let user = await Form.findOne({_doc:{fecha_cita}})//STEP 2
 
 
});


}