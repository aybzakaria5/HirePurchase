import { Installment as TInstallment } from "../api/installment/Installment";

export const INSTALLMENT_TITLE_FIELD = "id";

export const InstallmentTitle = (record: TInstallment): string => {
  return record.id?.toString() || String(record.id);
};
