import express from 'express';
import twilio from 'twilio';

const app = express();

const TWILIO_ACCOUNT = "ACebd244499b1fbecddb5fbdae2c9e5119";
const TWILIO_SECRET = "20a6beb039c9f77c5124c9c362fd782f";

const client = twilio(TWILIO_ACCOUNT,TWILIO_SECRET);

app.get('/whatsapp',async(req,res)=>{
    const result = await client.messages.create({
        from:`whatsapp:+14155238886`,
        to:`whatsapp:+5215567444717`,
        body:"Cuidado, perro peligrosisimo, adjunto foto",
        mediaUrl:["https://rcdn.rolloid.net/uploads/2017/03/imagenes-perros-caras-felices-momento-ser-adoptados-banner.jpg"]
    })
    console.log(result);
    res.send({status:"success",message:"Mensaje enviado"})
})

app.listen(8080,()=>console.log("Listening"))