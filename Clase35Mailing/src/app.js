import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const app = express();
const PORT = process.env.PORT||8080;

//MAILING
const transport = nodemailer.createTransport({
    service:'gmail',
    port: 587,
    auth: {
        user: 'ing.mauricioespinosa.tutorias@gmail.com',
        pass: 'yyzgvufmrvkjvnhz'
    }
})

app.get('/mail',async(req,res)=>{
    const result = await transport.sendMail({
        from:"Yo <ing.mauricioespinosa.tutorias@gmail.com>",
        to:["ing_mauricioespinosa@hotmail.com","rodrigo.ajnota1@gmail.com","maurifabris91@gmail.com"],
        subject: 'Pruebita',
        html:`<div><h1>¡Arriba las manos, esto es una prueba!</h1></div>`,
        attachments:[
            {
                filename:"PruebaDeCarga.txt",
                path:"./src/docs/Prueba1Artillery.txt"
            },
            {
                filename:'CoderDog.jpg',
                path:"./src/img/Panchito.jpg"
            }
        ]
    })
    console.log(result);
    res.send({status:"success",message:"Correo enviado"})
})


//TWILIO SMS

const TWILIO_ACCOUNT = "ACebd244499b1fbecddb5fbdae2c9e5119";
const TWILIO_SECRET = "43e470f7d826eea5709a625b9b3f2520";
const TWILIO_NUMBER = "+14254751369";
const twilioClient = twilio(TWILIO_ACCOUNT,TWILIO_SECRET);

app.get('/sms',async(req,res)=>{
    const result = await twilioClient.messages.create({
        body: "Este es un mensaje Twilioso",
        from: TWILIO_NUMBER,
        to:"+525567444717"
    })
    console.log(result);
    res.send({status:"success",message:"SMS enviado"})
})


app.listen(PORT,()=>console.log(`Listening on ${PORT}`))