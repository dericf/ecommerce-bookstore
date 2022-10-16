import AddToCartButton from "components/Cart/AddToCartButton";
import LoadingSpinner from "components/Shared/LoadingSpinner";
import QuantityInput from "components/Shared/QuantityInput";
import { currencyFormatter } from "lib/formatters";
import { ROUTES } from "lib/routes";
import { getProductById } from "mockedApi/products";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "types/models";
import LinkButton from "./LinkButton";
import ProductAuthor from "./ProductAuthor";
import ProductDescription from "./ProductDescription";
import ProductTitle from "./ProductTitle";

type ProductItemProps = {};

const ProductItem: FunctionComponent<ProductItemProps> = () => {
  const { productId: productIdStr } = useParams<{ productId: string }>();
  const [loading, setLoading] = useState<boolean>(true);

  const [product, setProduct] = useState<Product | undefined>();
  const [itemQuantity, setItemQuantity] = useState<number>(1);

  useEffect(() => {
    (async () => {
      if (productIdStr) {
        const productId = Number.parseInt(productIdStr);
        // Note: This would hit the backend asynchronously but for this project it just gets fake/static data
        const p = getProductById(productId);
        setProduct(p);
        setLoading(false);
      }
    })();
  }, [productIdStr]);

  return (
    <>
      {loading && <LoadingSpinner />}
      {product ? (
        <div className="flex flex-row gap-8">
          <div className="flex flex-col basis-2/3 bg-lightGray/30 p-8 rounded-lg">
            <ProductTitle>{product.title}</ProductTitle>
            <ProductAuthor>{product.author}</ProductAuthor>
            <ProductDescription>{product.description}</ProductDescription>
          </div>
          <div className="flex flex-col">
            <img
              src={product.imageSrc}
              alt="product item"
              className="rounded-lg mb-2"
            />
            <p>
              Price: <strong>{currencyFormatter.format(product.price)}</strong>
            </p>

            <div className="flex flex-row items-center mb-4">
              <span>Quantity:</span>
              <QuantityInput
                itemQuantity={itemQuantity}
                onQuantityChange={(newQuantity) => setItemQuantity(newQuantity)}
              />
            </div>

            <AddToCartButton item={product} quantity={itemQuantity} />
          </div>
        </div>
      ) : (
        <>
          <h2>No item found</h2>
          <LinkButton to={ROUTES.PRODUCTS}>Back to Products</LinkButton>
        </>
      )}
    </>
  );
};

export default ProductItem;
