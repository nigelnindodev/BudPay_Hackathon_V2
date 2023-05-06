import {BudPayProcessingRequest, SupportedCurrencies} from "../constants";

import { v4 as uuidv4 } from 'uuid';

export async function processBudPayPaymentRequest(amount: string, email: string) {
    const payload: BudPayProcessingRequest = {
      amount,
      email,
      currency: SupportedCurrencies.NIGERIA, // We will only use Nigeria for now
      reference: uuidv4(),
      callback: "www.budpay.com" // TODO: Implement callback functionality
    };
}