import { Module } from "@nestjs/common";
import { DocumentationService } from "./documentation.service";
import { DocumentationController } from "./documentation.controller";
import { DocumentationResolver } from "./documentation.resolver";

@Module({
  controllers: [DocumentationController],
  providers: [DocumentationService, DocumentationResolver],
  exports: [DocumentationService],
})
export class DocumentationModule {}
