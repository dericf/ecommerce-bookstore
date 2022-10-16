import React, { FunctionComponent, PropsWithChildren } from "react";

type ProductAuthorProps = {};

const ProductAuthor: FunctionComponent<
  PropsWithChildren<ProductAuthorProps>
> = ({ children }) => {
  return <h4 className="text lg font-semibold">{children}</h4>;
};

export default ProductAuthor;
