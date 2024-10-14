import React, { useState, FC } from "react";
import { Product } from "../typescript/products";
import Link from 'next/link'
import '../styles/product-card.css'

type ProductCardProps = {
    product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product?.variationAttributes?.[0]?.values?.[0]?.value);
  
  return (
    <div className="card">
      <img
        src={product.imageGroups?.[0]?.images?.[0]?.link}
        alt={product.imageGroups?.[0]?.images?.[0]?.alt}
        className={"image"}
      />
      <h2 className={"title"}>{product?.name}</h2>
      <p className={"price"}>${product?.price?.toFixed(2)}</p>
      <p className={"shortDescription"}>{product?.shortDescription}</p>

      <label htmlFor="size-select">Choose a size:</label>
      {
        selectedSize 
      }
      <select
        id="size-select"
        value={selectedSize}
        onChange={(e: any) => setSelectedSize(e?.target?.value)}
        className={"select"}
      >
        {product?.variationAttributes?.[0]?.values.map((size) => (
          <option key={size?.value} value={size?.value}>
            {size?.name}
          </option>
        ))}
      </select>

      {/* Use Next.js Link to navigate to product detail page */}
      <Link href={`/product/${product.id}?product=${encodeURIComponent(JSON.stringify(product))}`}>
        <p className={"button"}>View Product Details</p>
      </Link>
    </div>
  );
};

export default ProductCard;

// Usage example:
// <ProductCard product={yourProductJsonData} />
