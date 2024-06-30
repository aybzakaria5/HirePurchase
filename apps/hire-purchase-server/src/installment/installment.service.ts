import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstallmentServiceBase } from "./base/installment.service.base";

@Injectable()
export class InstallmentService extends InstallmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
