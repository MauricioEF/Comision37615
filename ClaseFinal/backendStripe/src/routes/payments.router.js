import { Router } from "express";
import PaymentService from "../service/payments.js";

const router = Router();

router.post('/payment-intents',async(req,res)=>{
    const order = req.body;
    const paymentIntentInfo = {
        amount: order.total,
        currency: 'usd',
        metadata:{
            userInfo: "Información del usuario guardado en la sesión",
            address: JSON.stringify({
                street:"Calle de prueba",
                postalCode:"29391"
            },null,'\t')
        }
    }
    const paymentService = new PaymentService();
    let result = await paymentService.createPaymentIntent(paymentIntentInfo);
    console.log(result);
    res.send({status:"success",payload:result});
})

export default router;