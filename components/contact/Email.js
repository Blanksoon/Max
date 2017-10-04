var email = require('emailjs')

// var server = email.server.connect({
//   user: 'fanzytrees@gmail.com',
//   password: 'fanzy1234',
//   host: 'Smtp.gmail.com',
//   ssl: true,
// })

// send the message and get a callback with an error or details of the message that was sent
// server.send(
//   {
//     text: 'i hope this works',
//     from: 'farm1771@gmail.com',
//     to: 'someone <fanzytrees@gmail.com>',
//     subject: 'testing emailjs',
//   },
//   function(err, message) {
//     console.log(err || message)
//   }
// )

//var fireMail = require('fire-mail')
var nodemailer = require('nodemailer')

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Gmail',
  auth: {
    user: 'fanzytrees@gmail.com',
    pass: 'newtree2013',
  },
})

// setup e-mail data with unicode symbols
var mailOptions = {
  from: 'Fred Foo ✔ <farm1771@gmail.com>', // sender address
  to: 'fanzytrees@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ✔', // plaintext body
  html: '<b>Hello world ✔</b>', // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error)
  } else {
    console.log('Message sent: ' + response.message)
  }

  // if you don't want to use this transport object anymore, uncomment following line
  //smtpTransport.close(); // shut down the connection pool, no more messages
})
