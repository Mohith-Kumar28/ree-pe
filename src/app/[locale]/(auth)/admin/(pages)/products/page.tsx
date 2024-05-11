import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

import HeaderWrapper from '../../components/reusable-components/layout/header-wrapper';
import ProductsTable from './components/table/products-table';
import { productSchema } from './data/schema';

async function getProducts() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      'src/app/[locale]/(auth)/admin/(pages)/products/data/products.json',
    ),
  );

  const products = JSON.parse(data.toString());

  return z.array(productSchema).parse(products);
}
const Products = async () => {
  const products = await getProducts();

  return (
    <HeaderWrapper title="Products!" subTitle="Here's a list of your Products.">
      <ProductsTable products={products} />
    </HeaderWrapper>
  );
};

export default Products;
