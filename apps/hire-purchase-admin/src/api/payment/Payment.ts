export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  method?: "Option1" | null;
  paymentDate: Date | null;
  updatedAt: Date;
};
