import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Page from "./component/Page/Page";
import { MoviContext } from "./Context";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MoviContext.Provider value={{ cartData, setCartData }}>
        <Page />
        <ToastContainer />
      </MoviContext.Provider>
    </>
  );
}

export default App;
