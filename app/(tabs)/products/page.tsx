import db from "@/lib/db";
import ListProducts from "@/components/ListProducts";
import ProductList from "@/components/product-list";
import { Prisma } from "@prisma/client";

async function getProducts() {
  const product = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    take: 1,
    orderBy: {
      created_at: "desc",
    },
  });
  return product;
}

export type InitialProducts = Prisma.PromiseReturnType<typeof getProducts>

export default async function Products() {
  const initailProducts = await getProducts();

  return (
    <div>
      <ProductList initialProducts={initailProducts} />
    </div>
  );
}
