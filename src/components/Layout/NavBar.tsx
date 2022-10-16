import { useAppSelector } from "hooks/storeHooks";
import { ROUTES } from "lib/routes";
import React from "react";
import NavItem from "./NavItem";

const NAV_ITEMS = [
  { label: "Home", path: ROUTES.HOME },
  { label: "Products", path: ROUTES.PRODUCTS },
];

type Props = {};

const NavBar = (props: Props) => {
  const { items } = useAppSelector((state) => state.cart);
  return (
    <nav className="w-screen bg-lightGray py-2 sticky top-0 z-10">
      <ul className="flex decoration-0">
        {NAV_ITEMS.map((link) => (
          <NavItem key={link.path} to={link.path} label={link.label} />
        ))}
        <NavItem
          to={ROUTES.CART}
          label={items.length > 0 ? `Cart (${items.length})` : "Cart"}
        />
      </ul>
    </nav>
  );
};

export default NavBar;
