import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DocumentationService } from "./documentation.service";
import { Readme } from "../documentation/Readme";

@swagger.ApiTags("documentations")
@common.Controller("documentations")
export class DocumentationController {
  constructor(protected readonly service: DocumentationService) {}

  @common.Post("/readme")
  @swagger.ApiOkResponse({
    type: Readme
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateReadMe(
    @common.Body()
    body: Readme
  ): Promise<Readme> {
        return this.service.CreateReadMe(body);
      }
}
