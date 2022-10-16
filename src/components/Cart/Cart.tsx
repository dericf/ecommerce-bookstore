import PageSubtitle from "components/Layout/PageSubtitle";
import PageTitle from "components/Layout/PageTitle";
import LinkButton from "components/Products/LinkButton";
import ProductDescription from "components/Products/ProductDescription";
import ProductTitle from "components/Products/ProductTitle";
import QuantityInput from "components/Shared/QuantityInput";
import { useAppDispatch, useAppSelector } from "hooks/storeHooks";
import { currencyFormatter } from "lib/formatters";
import { ROUTES } from "lib/routes";
import { FunctionComponent } from "react";
import { RouteProps } from "react-router-dom";
import { removeItemById, updateQuantity } from "store/reducers/cartSlice";

type Props = {};
/**
 * Display a shopping cart
 */
const Home: FunctionComponent<RouteProps & Props> = (props) => {
  const { items, cartTotal } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const renderTotalPriceSection = () =>
    items.length > 0 && (
      <div className="flex flex-col items-end">
        <div className="flex flex-col">
          <p className="text-lg">
            <span className="bg-neutral/60 text-white px-4 py-2 rounded font-bold">
              Total Price
            </span>{" "}
            &nbsp;{" "}
            <strong className="text-primary">
              {currencyFormatter.format(cartTotal)}
            </strong>
          </p>
          <button
            title="This feature is not implemented yet"
            className="button-default mt-8 "
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    );

  return (
    <>
      <PageTitle>Your Cart</PageTitle>
      {items.length === 0 && (
        <>
          <PageSubtitle className="px-0">No Items in your Cart</PageSubtitle>
          <LinkButton to={ROUTES.PRODUCTS} className="mt-4">
            Shop All Products
          </LinkButton>
        </>
      )}
      {items.map((item) => (
        <div
          className="flex flex-row justify-around my-8 p-4 shadow-lg max-w-6xl"
          key={item.id}
        >
          <div className="basis-1/5">
            <img
              src={item.imageSrc}
              alt={`(${item.title})`}
              className="rounded-lg shadow-md m-4 h-32"
            />
          </div>
          <div className="flex flex-col basis-3/5 p-4">
            <ProductTitle>{item.title}</ProductTitle>
            <ProductDescription clamp>{item.description}</ProductDescription>
          </div>
          <div className="flex flex-col basis-1/5 p-4">
            <div>
              Price: <strong>{currencyFormatter.format(item.price)}</strong>
              <br />
              <div className="flex flex-row items-center">
                Quantity:
                <QuantityInput
                  itemQuantity={item.quantity}
                  onQuantityChange={(newQuantity) =>
                    dispatch(
                      updateQuantity({ newQuantity, productId: item.id }),
                    )
                  }
                />
                <button
                  className="button-outlined error flex-grow-0 max-w-fit self-end ml-4 small"
                  onClick={() => dispatch(removeItemById(item.id))}
                  title="Remove item from cart"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {renderTotalPriceSection()}
    </>
  );
};

export default Home;
