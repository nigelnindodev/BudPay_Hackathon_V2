import { Context } from "koa";
import Joi from "joi";
import {processBudPayPaymentRequest} from "../payments";

export default class PaymentsController {
    public static async initializeBudPayPayment(ctx: Context): Promise<void> {
        console.log("Reached initialize BudPay payment controller method");
        console.log(ctx.request.body);
        const expectedSchema = Joi.object({
            amount: Joi.string().required(),
            email: Joi.string().required()
        });

        const { error, value } = expectedSchema.validate(ctx.request.body);

        if (error || ctx.request.body === undefined) {
            ctx.status = 403;
            ctx.body = {
                result: "Unexpected or missing body for request"
            };
        }

        await processBudPayPaymentRequest(value.amount, value.email);
    }
}