export enum SupportedCurrencies {
    NIGERIA = "NGN",
    KENYA = "KES"
}

export interface BudPayProcessingRequest {
    amount: string;
    email: string;
    currency: string;
    reference: string;
    callback: string;
}