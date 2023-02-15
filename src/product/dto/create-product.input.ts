import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  product_name: string;

  @Field()
  product_code: string;

  @Field((type) => Int)
  quantity: number;
}
