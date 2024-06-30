import { PaymentWhereInput } from "./PaymentWhereInput";
import { PaymentOrderByInput } from "./PaymentOrderByInput";

export type PaymentFindManyArgs = {
  where?: PaymentWhereInput;
  orderBy?: Array<PaymentOrderByInput>;
  skip?: number;
  take?: number;
};
