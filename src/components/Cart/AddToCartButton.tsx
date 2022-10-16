import { useAppDispatch } from "hooks/storeHooks";
import React, { FunctionComponent } from "react";
import { toast } from "react-toastify";

import { addItem } from "store/reducers/cartSlice";
import { Product } from "types/models";

type AddToCartButtonProps = {
  item: Product;
  quantity: number;
};

/**
 * Reusable button to add an item to the shopping cart
 */
const AddToCartButton: FunctionComponent<AddToCartButtonProps> = ({
  item,
  quantity,
}) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="button-default"
      onClick={() => {
        dispatch(addItem({ ...item, quantity }));
        toast.success("Added your item to the cart");
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
