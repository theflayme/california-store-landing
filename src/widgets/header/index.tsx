import Shopper from "@entities/product/ui/shopper";
import Logotype from "@shared/assets/images/png/Logotype.png";

import "./style.scss";
import { Outlet } from "react-router";

const Header = () => {
  return (
    <>
      <header>
        <img src={Logotype} alt="" />
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
        <Shopper />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
