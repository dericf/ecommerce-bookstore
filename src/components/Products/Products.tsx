import PageTitle from "components/Layout/PageTitle";
import LoadingSpinner from "components/Shared/LoadingSpinner";
import { ROUTES } from "lib/routes";
import { getAllProducts } from "mockedApi/products";
import React, { FunctionComponent, useEffect, useState } from "react";
import { generatePath, Link } from "react-router-dom";
import { Product } from "types/models";
import ProductAuthor from "./ProductAuthor";
import ProductTitle from "./ProductTitle";

type Props = {};
/**
 * The main products page
 */
const Products: FunctionComponent<Props> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      // Note: This would hit the backend asynchronously but for this project it just gets fake/static data
      const allProducts = getAllProducts();
      setProducts(allProducts);
      setLoading(false);
    })();
  }, []);
  return (
    <>
      <PageTitle>Products</PageTitle>
      {loading && <LoadingSpinner />}
      <div className="flex flex-row justify-evenly flex-wrap gap-16">
        {!loading &&
          products?.map((product) => (
            <Link
              key={product.id}
              to={generatePath(ROUTES.PRODUCT_ITEM, {
                productId: product.id,
              })}
              className="basis-3/12 shadow-lg rounded-lg hover:drop-shadow-2xl hover:scale-110 text-neutral no-underline px-4 py-8"
            >
              <img
                src={product.imageSrc}
                alt="product item"
                className="w-full rounded-lg mb-2"
              />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductAuthor>{product.author}</ProductAuthor>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Products;
