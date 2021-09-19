import React, { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }[];
  totalPrice: number;
  addToWishList: (id: number) => void;
}

export function SearchResults({ results, addToWishList, totalPrice }: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results?.map((product) => {
        return <ProductItem product={product} key={product.id} addToWishList={addToWishList} />;
      })}
    </div>
  );
}
