import Stripe from 'stripe';

export default class PaymentService {
    constructor() {
        this.stripe = new Stripe(`sk_test_51MZwcHHCUXeM0NeyShRiXjFVoi5JARbw46S26XZzyNr9hbhUfgWotbVqCxIhrbppOlsGYY63w0O9exZ7WUkQmN9V00DurpxcIk`)
    }
    createPaymentIntent = async(data) =>{
        const paymentIntent = this.stripe.paymentIntents.create(data);
        return paymentIntent;
    }
}