const express = require('express');
const router = express.Router();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

router.post("/inscripsion",(req, res) => {
     const { name, lastname, email, courses, mobile } = req.body;
     const contentHtml = `
     <h1><strong>PRE-INSCRIPSION DESDE PAGINA WEB</strong></h1>
          <p class="h2">Hola mi nombre es <strong>${name} ${lastname}</strong> estoy interesado en el tenico laboral de <strong>${courses}</strong> por favor contactarme en el email <strong>${email}</strong> o en el telefono <strong>${mobile}</strong>. De antemano agradezco su colaboracion</p> 
     `
     const msgInscripsion = {
          to: 'carmendo2@gmail.com', // Change to your recipient
          from: 'carmendo2@hotmail.com', // Change to your verified sender
          subject: 'PRE-INSCRIPSION DESDE PAGINA WEB',
          html: contentHtml
     }

        sgMail
        .send(msgInscripsion)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.log(error)   
        })

     res.end();
});

router.post('/contacto',(req, res) => {
     
     const { contacto, correoContacto, mensaje } = req.body

     const contactoHtml = `
     <div class="container">
     <h1><strong>MENSAJE DESDE PAGINA WEB</strong></h1>
          <div class="row">
               <div class="col">
                    <h2>Nombre:</h2>
                    <h3>${contacto}</h3>
               </div>
               <div class="col">
                    <h2>Correo:</h2>
                    <h3>${correoContacto}</h3>
               </div>
          </div>
          <div class="row">
               <h2>Mensaje : </h2>
               <h3><strong>${mensaje}</strong></h3>
          </div>
     </div>
     `
     const msgContacto = {
          to: 'carmendo2@gmail.com', // Change to your recipient
          from: 'carmendo2@hotmail.com', // Change to your verified sender
          subject: 'MENSAJE DESDE PAGINA WEB',
          html: contactoHtml
     }
    
      sgMail
        .send(msgContacto)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.log(error)   
        })

     res.end(); 


})

module.exports = router