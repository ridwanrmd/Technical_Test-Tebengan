import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
// import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  quantity: number;
}
