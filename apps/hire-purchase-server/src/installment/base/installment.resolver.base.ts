/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Installment } from "./Installment";
import { InstallmentCountArgs } from "./InstallmentCountArgs";
import { InstallmentFindManyArgs } from "./InstallmentFindManyArgs";
import { InstallmentFindUniqueArgs } from "./InstallmentFindUniqueArgs";
import { CreateInstallmentArgs } from "./CreateInstallmentArgs";
import { UpdateInstallmentArgs } from "./UpdateInstallmentArgs";
import { DeleteInstallmentArgs } from "./DeleteInstallmentArgs";
import { InstallmentService } from "../installment.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Installment)
export class InstallmentResolverBase {
  constructor(
    protected readonly service: InstallmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Installment",
    action: "read",
    possession: "any",
  })
  async _installmentsMeta(
    @graphql.Args() args: InstallmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Installment])
  @nestAccessControl.UseRoles({
    resource: "Installment",
    action: "read",
    possession: "any",
  })
  async installments(
    @graphql.Args() args: InstallmentFindManyArgs
  ): Promise<Installment[]> {
    return this.service.installments(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Installment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Installment",
    action: "read",
    possession: "own",
  })
  async installment(
    @graphql.Args() args: InstallmentFindUniqueArgs
  ): Promise<Installment | null> {
    const result = await this.service.installment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Installment)
  @nestAccessControl.UseRoles({
    resource: "Installment",
    action: "create",
    possession: "any",
  })
  async createInstallment(
    @graphql.Args() args: CreateInstallmentArgs
  ): Promise<Installment> {
    return await this.service.createInstallment({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Installment)
  @nestAccessControl.UseRoles({
    resource: "Installment",
    action: "update",
    possession: "any",
  })
  async updateInstallment(
    @graphql.Args() args: UpdateInstallmentArgs
  ): Promise<Installment | null> {
    try {
      return await this.service.updateInstallment({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Installment)
  @nestAccessControl.UseRoles({
    resource: "Installment",
    action: "delete",
    possession: "any",
  })
  async deleteInstallment(
    @graphql.Args() args: DeleteInstallmentArgs
  ): Promise<Installment | null> {
    try {
      return await this.service.deleteInstallment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}