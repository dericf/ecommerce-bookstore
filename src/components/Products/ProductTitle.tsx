import React, { FunctionComponent, PropsWithChildren } from "react";

type ProductTitleProps = {};

const ProductTitle: FunctionComponent<PropsWithChildren<ProductTitleProps>> = ({
  children,
}) => {
  return <h3 className="text-2xl font-bold">{children}</h3>;
};

export default ProductTitle;
