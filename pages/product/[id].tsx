import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from '../../typescript/products';

const ProductDetail = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product>({} as Product);
  const { query } = router;

  useEffect(() => {
    if (query.product) {
      try {
        // Check if query.product is an array or a string
        const productData = Array.isArray(query.product) ? query.product[0] : query.product;
        // Decode and parse the product data
        const parsedProduct = JSON.parse(decodeURIComponent(productData));
        setProduct(parsedProduct);
      } catch (error) {
        console.error('Error parsing product data:', error);
      }
    }
  }, [query]);


  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="container">
      <div className="product-detail">
        <div className="image-section">
          <img
            src={product?.imageGroups?.[0]?.images?.[0]?.link}
            alt={product.imageGroups?.[0]?.images?.[0]?.alt}
            className="product-image"
          />
        </div>
        <div className="details-section">
          <h1>{product?.name}</h1>
          <p><strong>Price:</strong> {product?.price} {product?.currency}</p>
          <p><strong>Description:</strong> {product?.longDescription}</p>
          <p><strong>Short Description:</strong> {product?.shortDescription}</p>
          <p><strong>Available Sizes:</strong> 
            {product?.variants?.map(variant => (
              <span key={variant?.productId}> {variant?.variationValues?.accessorySize} </span>
            ))}
          </p>
          <p><strong>Available Colors:</strong>
            {product?.variationAttributes?.map(attr => (
              attr?.id === 'color' && attr?.values?.map(value => (
                <span key={value?.value}> {value?.name} </span>
              ))
            ))}
          </p>
          <p><strong>Stock Level:</strong> {product?.inventory?.stockLevel > 0 ? "In Stock" : "Out of Stock"}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .product-detail {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .image-section {
          flex: 1;
          min-width: 300px;
          padding: 20px;
        }
        .product-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .details-section {
          flex: 2;
          min-width: 300px;
          padding: 20px;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        p {
          margin: 0.5rem 0;
        }
        @media (max-width: 768px) {
          .product-detail {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;