import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InstallmentModuleBase } from "./base/installment.module.base";
import { InstallmentService } from "./installment.service";
import { InstallmentController } from "./installment.controller";
import { InstallmentResolver } from "./installment.resolver";

@Module({
  imports: [InstallmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [InstallmentController],
  providers: [InstallmentService, InstallmentResolver],
  exports: [InstallmentService],
})
export class InstallmentModule {}
