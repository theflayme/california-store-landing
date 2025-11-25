import Shopper from "@entities/product/ui/shopper";
import Search from "@entities/product/ui/search";
import Logotype from "@shared/assets/images/svg/Logotype.svg?react";

import "./style.scss";
import { Outlet } from "react-router";

const Header = () => {
  return (
    <>
      <header>
        <Logotype />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="actions">
          <Search />
          <Shopper />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
