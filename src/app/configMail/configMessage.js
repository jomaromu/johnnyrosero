const nodemailer = require("nodemailer");

module.exports = formulario => {
    // transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'jomaromu2@gmail.com',
            pass: '2009momomo.'
        }
    });

    // mailOptions
    const mailOptions = {
        from: `${formulario.nombre}, ${formulario.correo}`,
        to: `masuspanama@gmail.com`,
        subject: `Mensaje interesado en página web`,
        html: `<strong>Nombre:</strong> ${formulario.nombre} <br/>
        <strong>Teléfono:</strong> ${formulario.celular} <br/>
        <strong>E-mail:</strong> ${formulario.correo} <br/>
        <strong>Mensaje:</strong> ${formulario.mensaje}`
    };

    // uso del transporter
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
            console.log(transporter);
        }
    });
};