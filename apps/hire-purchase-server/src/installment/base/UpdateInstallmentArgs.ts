/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InstallmentWhereUniqueInput } from "./InstallmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InstallmentUpdateInput } from "./InstallmentUpdateInput";

@ArgsType()
class UpdateInstallmentArgs {
  @ApiProperty({
    required: true,
    type: () => InstallmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InstallmentWhereUniqueInput)
  @Field(() => InstallmentWhereUniqueInput, { nullable: false })
  where!: InstallmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InstallmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => InstallmentUpdateInput)
  @Field(() => InstallmentUpdateInput, { nullable: false })
  data!: InstallmentUpdateInput;
}

export { UpdateInstallmentArgs as UpdateInstallmentArgs };
