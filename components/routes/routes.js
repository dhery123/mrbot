
const nodemailer = require('nodemailer');
const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const Form = require('../dataform');
const Swal = require('sweetalert2');
const {v4:uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const FormController = require('./form.controller');

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

webserver.get('/hecho', function(req,res) {

  res.render('error', {
    layout: 'layouts/default',
    base_url: req.hostname
  });


  
   
});


webserver.get('/citas', async(req,res)=> {
  const datess = Form(req.body);
  const forms = await Form.findOne({fecha_cita:'2022-10-25'});
  res.render('citas', {
    layout: 'layouts/default',
    base_url: req.hostname,
    forms
  });
});

webserver.post('/citas/new',async (req, res) => {
  console.log(req.body.fecha_cita);
  
  FormController.signUp
  const form = Form(req.body);
  
  const formSaved = await form.save();

  
}
);
webserver.post(
  '/citas/mail',
  [],
  FormController.signUp
);


}