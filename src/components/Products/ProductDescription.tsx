import React, { FunctionComponent, PropsWithChildren } from "react";

type Props = {
  clamp?: boolean;
};

const ProductDescription: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  clamp = false,
}) => {
  return <p className={`${clamp ? "line-clamp-2" : ""}`}>{children}</p>;
};

export default ProductDescription;
