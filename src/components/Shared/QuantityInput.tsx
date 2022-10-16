import React from "react";

type Props = {
  itemQuantity: number;
  onQuantityChange: (newQuantity: number) => void;
};

/**
 * Display and change the quantity for an item
 */
const QuantityInput = ({ itemQuantity, onQuantityChange }: Props) => {
  return (
    <div className="flex flex-row gap-4 items-center w-full ml-2">
      <span className="font-semibold w-1/5">{itemQuantity}</span>
      <button
        className="button-outlined small"
        onClick={() =>
          onQuantityChange(itemQuantity > 1 ? itemQuantity - 1 : 1)
        }
      >
        -
      </button>
      <button
        className="button-outlined small"
        onClick={() => onQuantityChange(itemQuantity + 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
