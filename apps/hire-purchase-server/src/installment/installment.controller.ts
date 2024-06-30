import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstallmentService } from "./installment.service";
import { InstallmentControllerBase } from "./base/installment.controller.base";

@swagger.ApiTags("installments")
@common.Controller("installments")
export class InstallmentController extends InstallmentControllerBase {
  constructor(
    protected readonly service: InstallmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
