import { useContext, useState } from "react";
import Moon from "../../assets/icons/moon.svg";
import Sun from "../../assets/icons/sun.svg";
import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";

import { DarkModeContext, MoviContext } from "../../Context";
import Card from "../cine/Card/Card";
import shoppingCart from "./../../assets/shopping-cart.svg";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MoviContext);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  console.log(cartData);

  const handleShowCart = () => {
    setShowCart(true);
  };

  return (
    <header>
      {showCart && <Card onCencel={() => setShowCart(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img
                src={darkMode ? Sun : Moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => handleShowCart()}
            >
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt="shopping-cart"
              />

              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
