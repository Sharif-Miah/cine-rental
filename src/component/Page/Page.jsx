import { useContext } from "react";
import { DarkModeContext } from "../../Context";
import MoviList from "../cine/MoviList/MoviList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Page = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MoviList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
