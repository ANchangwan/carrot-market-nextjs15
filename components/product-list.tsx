"use client";
import { InitialProducts } from "@/app/(tabs)/products/page";
import ListProducts from "./ListProducts";
import { useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/products/action";

interface IProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: IProductListProps) {
  const [products, setProduct] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const newProducts = await getMoreProducts(1);
    setProduct((prev) => [...prev, ...newProducts]);
    setIsLoading(false);
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      {products.map((product) => (
        <ListProducts key={product.id} {...product} />
      ))}
      <button
        disabled={isLoading}
        onClick={onLoadMoreClick}
        className="bg-orange-500 
      text-sm font-semibold w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90
      active:scale-90
      "
      >
        {isLoading ? "loading..." : "Load more"}
      </button>
    </div>
  );
}
