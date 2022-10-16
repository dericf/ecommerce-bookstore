import { createBrowserRouter } from "react-router-dom";

import Home from "components/Home/Home";
import Products from "components/Products/Products";
import ErrorPage from "components/Routing/ErrorPage";
import Cart from "components/Cart/Cart";
import ProductItem from "components/Products/ProductItem";
import Layout from "components/Layout/Layout";
import { ROUTES } from "./routes";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: ROUTES.PRODUCTS,
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },
  {
    path: ROUTES.PRODUCT_ITEM,
    element: (
      <Layout>
        <ProductItem />
      </Layout>
    ),
  },
  {
    path: ROUTES.CART,
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
]);

export { router };
