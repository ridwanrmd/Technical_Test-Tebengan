import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => Product)
  getProduct(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

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

  @Mutation((returns) => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.updateProduct(
      updateProductInput.id,
      updateProductInput,
    );
  }

  removeProduct(@Args('id') id: number) {
    return this.productService.removeProduct(id);
  }
}
