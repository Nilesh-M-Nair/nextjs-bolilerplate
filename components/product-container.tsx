import React, {FC} from "react";
import ProductCard from "./product-card";
import { Product } from "../typescript/products";

type ProductGridProps = {
    products: Array<Product>
}

const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="product-grid" style={{ display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
        padding: "16px"}}>
      {products?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


// Global CSS for responsiveness
const globalStyles = `
  .product-grid {
    width: 100%;
  }

  @media (min-width: 1200px) {
    .product-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .product-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .product-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 767px) {
    .product-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default ProductGrid;

// Usage example:
// <ProductGrid products={[yourProductData1, yourProductData2, ...]} />
