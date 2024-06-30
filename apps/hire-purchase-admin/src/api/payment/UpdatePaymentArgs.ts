import { PaymentWhereUniqueInput } from "./PaymentWhereUniqueInput";
import { PaymentUpdateInput } from "./PaymentUpdateInput";

export type UpdatePaymentArgs = {
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateInput;
};
