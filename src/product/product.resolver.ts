import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateProductInput } from './dto/create-product.input';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => [Product])
  product(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Mutation((returns) => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productService.createProduct(createProductInput);
  }
}
