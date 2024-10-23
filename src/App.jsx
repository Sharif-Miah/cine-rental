import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Page from "./component/Page/Page";
import { DarkModeContext, MoviContext } from "./Context";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <MoviContext.Provider value={{ cartData, setCartData }}>
          <Page />
          <ToastContainer />
        </MoviContext.Provider>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
