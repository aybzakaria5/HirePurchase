import { InstallmentWhereInput } from "./InstallmentWhereInput";
import { InstallmentOrderByInput } from "./InstallmentOrderByInput";

export type InstallmentFindManyArgs = {
  where?: InstallmentWhereInput;
  orderBy?: Array<InstallmentOrderByInput>;
  skip?: number;
  take?: number;
};
