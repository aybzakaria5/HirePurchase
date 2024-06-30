import { SortOrder } from "../../util/SortOrder";

export type InstallmentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
