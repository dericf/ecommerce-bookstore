import AddToCartButton from "components/Cart/AddToCartButton";
import PageTitle from "components/Layout/PageTitle";
import LinkButton from "components/Products/LinkButton";
import ProductAuthor from "components/Products/ProductAuthor";
import ProductDescription from "components/Products/ProductDescription";
import ProductTitle from "components/Products/ProductTitle";
import Card from "components/Shared/Card";
import LoadingSpinner from "components/Shared/LoadingSpinner";
import { currencyFormatter } from "lib/formatters";
import { ROUTES } from "lib/routes";
import { getFeaturedProducts } from "mockedApi/products";
import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import { generatePath, Link } from "react-router-dom";
import { Product } from "types/models";

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState<
    Product[] | undefined
  >();

  const moreFromAuthor = useMemo(
    () => featuredProducts?.slice(1),
    [featuredProducts],
  );

  useEffect(() => {
    // Note: This would hit the backend asynchronously but for this project it just gets fake/static data
    setFeaturedProducts(getFeaturedProducts());
    setLoading(false);
  }, []);

  return (
    <>
      <PageTitle>Featured Book & Author</PageTitle>
      {featuredProducts && !loading ? (
        <Card className="px-8 py-8 rounded-2xl">
          <div className="w-full flex flex-row h-auto gap-16">
            <div className="flex-col ">
              <img
                width="100%"
                src={featuredProducts[0]?.imageSrc}
                alt="product"
                className="rounded-lg"
              />
            </div>
            <div className="w-3/5">
              <ProductTitle>{featuredProducts[0]?.title}</ProductTitle>
              <ProductAuthor>{featuredProducts[0]?.author}</ProductAuthor>
              <ProductDescription>
                {featuredProducts[0]?.description}
              </ProductDescription>

              <div className="flex flex-row justify-center items-center mt-8 gap-4">
                <span className="text-lg">
                  Price:{" "}
                  <strong>
                    {currencyFormatter.format(featuredProducts[0].price)}
                  </strong>
                </span>
                <AddToCartButton item={featuredProducts[0]} quantity={1} />
                <LinkButton
                  color="secondary"
                  to={generatePath(ROUTES.PRODUCT_ITEM, {
                    productId: featuredProducts[0].id,
                  })}
                >
                  More Details
                </LinkButton>
              </div>
            </div>
          </div>
          <hr className="my-8" />
          {featuredProducts.length > 1 && (
            <h3 className="text-lg font-semibold text-center ">
              More titles from {featuredProducts[0].author}
            </h3>
          )}
          <div className="flex flex-row justify-around gap-8 flex-wrap">
            {moreFromAuthor &&
              moreFromAuthor?.map((book) => (
                <Card className=" hover:shadow-2xl p-8 w-60 " key={book.id}>
                  <Link
                    to={`${ROUTES.PRODUCTS}/${book.id}`}
                    className="no-underline text-neutral"
                  >
                    <img
                      src={book.imageSrc}
                      alt={`book by ${book.author}`}
                      className="object-cover rounded-lg"
                    />
                    <ProductTitle>{book.title}</ProductTitle>
                    <ProductDescription clamp>
                      {book.description}
                    </ProductDescription>
                  </Link>
                </Card>
              ))}

            {featuredProducts.length === 1 && (
              <p className="text-center">
                There are no more books by{" "}
                <strong>{featuredProducts[0].author}</strong>
              </p>
            )}
          </div>
        </Card>
      ) : (
        <LoadingSpinner className="mt-8" />
      )}
      <div className="flex justify-center my-16">
        <LinkButton to={ROUTES.PRODUCTS}>Shop All Products</LinkButton>
      </div>
    </>
  );
};

export default Home;
