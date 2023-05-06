import {BudPayProcessingRequest, SupportedCurrencies} from "../constants";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import {config} from "../config";

export async function processBudPayPaymentRequest(amount: string, email: string): Promise<any> {
    const payload: BudPayProcessingRequest = {
      amount,
      email,
      currency: SupportedCurrencies.NIGERIA, // We will only use Nigeria for now
      reference: uuidv4(),
      callback: "www.budpay.com" // TODO: Implement callback functionality
    };

    const requestOptions = {
        method: "POST",
        headers: { "Authorization": config.budPayAuthorizationHeader },
        data: payload,
        url: `${config.budPayBaseUrl}/api/v2/transaction/initialize`
    };

    const result = await axios(requestOptions);
    console.log("Log result:");
    console.log(result);

}