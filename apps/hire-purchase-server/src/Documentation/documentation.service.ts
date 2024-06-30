import { Injectable } from "@nestjs/common";
import { Readme } from "../documentation/Readme";

@Injectable()
export class DocumentationService {
  constructor() {}
  async CreateReadMe(args: Readme): Promise<Readme> {
    throw new Error("Not implemented");
  }
}
