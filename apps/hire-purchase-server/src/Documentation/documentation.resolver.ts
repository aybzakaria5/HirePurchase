import * as graphql from "@nestjs/graphql";
import { Readme } from "../documentation/Readme";
import { DocumentationService } from "./documentation.service";

export class DocumentationResolver {
  constructor(protected readonly service: DocumentationService) {}

  @graphql.Mutation(() => Readme)
  async CreateReadMe(
    @graphql.Args()
    args: Readme
  ): Promise<Readme> {
    return this.service.CreateReadMe(args);
  }
}
