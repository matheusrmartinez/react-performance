import React, { useMemo } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';

import { ProductItem } from './ProductItem';

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

export function SearchResults({
  results,
  addToWishList,
  totalPrice,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          key={key}
          addToWishList={addToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={500}
        width={500}
        rowHeight={25}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
