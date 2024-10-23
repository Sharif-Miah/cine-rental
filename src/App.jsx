import { useState } from "react";
import "./App.css";
import Page from "./component/Page/Page";
import { MoviContext } from "./Context";

function App() {
  const { moviValue, setMoviValue } = useState(null);

  return (
    <>
      <MoviContext.Provider value={{ moviValue, setMoviValue }}>
        <Page />
      </MoviContext.Provider>
    </>
  );
}

export default App;
