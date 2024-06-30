import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "id";

export const PaymentTitle = (record: TPayment): string => {
  return record.id?.toString() || String(record.id);
};
