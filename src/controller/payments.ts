import { Context } from "koa";
import Joi from "joi";
import {processBudPayPaymentRequest} from "../payments";

export default class PaymentsController {
    public static async initializeBudPayPayment(ctx: Context): Promise<void> {
        const expectedSchema = Joi.object({
            amount: Joi.string().required(),
            email: Joi.string().required()
        });

        const { error, value } = expectedSchema.validate(ctx.request.body);

        if (error || ctx.request.body === undefined) {
            // Bad request
        }

        await processBudPayPaymentRequest(value.amount, value.email);
    }
}